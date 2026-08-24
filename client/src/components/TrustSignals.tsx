import { Shield, Award, Users, Clock } from "lucide-react";

export default function TrustSignals() {
  return (
    <section className="py-12 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 text-red-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Fully Licensed</h3>
            <p className="text-sm text-gray-600">Nebraska State Licensed Contractor</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Award className="h-12 w-12 text-red-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">Quality Guarantee</h3>
            <p className="text-sm text-gray-600">100% Satisfaction Promise</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 text-red-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">500+ Projects</h3>
            <p className="text-sm text-gray-600">Happy Omaha Customers</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Clock className="h-12 w-12 text-red-600 mb-3" />
            <h3 className="font-bold text-gray-900 mb-1">25+ Years</h3>
            <p className="text-sm text-gray-600">Serving Omaha Since 1998</p>
          </div>
        </div>
      </div>
    </section>
  );
}