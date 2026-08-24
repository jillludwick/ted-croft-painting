import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { sendEstimateNotification, sendCustomerConfirmation } from "./mailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Create the contact submission
      const submission = await storage.createContactSubmission(validatedData);

      console.log("New contact submission received:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        projectType: submission.projectType,
        submittedAt: submission.submittedAt
      });

      // Send emails if Gmail credentials are configured
      if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
        try {
          await Promise.all([
            sendEstimateNotification(validatedData),
            sendCustomerConfirmation({ name: validatedData.name, email: validatedData.email }),
          ]);
          console.log("Email notifications sent successfully");
        } catch (emailError) {
          console.error("Failed to send email notification:", emailError);
          // Don't fail the request if email fails
        }
      } else {
        console.warn("Email not configured: GMAIL_USER or GMAIL_APP_PASSWORD missing");
      }
      
      res.status(201).json({
        success: true,
        message: "Contact submission received successfully",
        id: submission.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        console.error("Error processing contact submission:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({
        success: true,
        submissions
      });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
