import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { MapPin, Phone, CheckCircle } from 'lucide-react';

const serviceLocations = [
  { name: 'Omaha', lat: 41.2565, lng: -95.9345, primary: true },
  { name: 'Bellevue', lat: 41.1544, lng: -95.9146 },
  { name: 'Papillion', lat: 41.1544, lng: -96.0419 },
  { name: 'La Vista', lat: 41.1839, lng: -96.0311 },
  { name: 'Elkhorn', lat: 41.2861, lng: -96.2353 },
  { name: 'Gretna', lat: 41.1406, lng: -96.2392 },
  { name: 'Ralston', lat: 41.2011, lng: -96.0419 },
  { name: 'Council Bluffs', lat: 41.2619, lng: -95.8608 },
];

function MapMarker({ isPrimary }: { isPrimary?: boolean }) {
  return (
    <div 
      className={`${isPrimary ? 'w-8 h-8 bg-black' : 'w-5 h-5 bg-gray-700'} rounded-full border-2 border-white shadow-lg flex items-center justify-center`}
    >
      {isPrimary && <span className="text-white text-xs font-bold">TC</span>}
    </div>
  );
}

export default function ServiceArea() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const center = { lat: 41.2565, lng: -95.9345 };

  return (
    <section id="service-area" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Local Painting Experts
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Omaha Metropolitan Service Area
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proudly serving the greater Omaha area with professional painting services for over 25 years
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="h-[500px] rounded-xl overflow-hidden shadow-xl border border-gray-200" data-testid="map-container">
            {apiKey ? (
              <APIProvider apiKey={apiKey}>
                <Map
                  defaultCenter={center}
                  defaultZoom={10}
                  gestureHandling="cooperative"
                  disableDefaultUI={false}
                  mapId="ted-croft-painting-map"
                  data-testid="google-map"
                >
                  {serviceLocations.map((location) => (
                    <AdvancedMarker
                      key={location.name}
                      position={{ lat: location.lat, lng: location.lng }}
                      title={`${location.name} - Ted Croft Painting Service Area`}
                    >
                      <MapMarker isPrimary={location.primary} />
                    </AdvancedMarker>
                  ))}
                </Map>
              </APIProvider>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8">
                <MapPin className="w-16 h-16 text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Omaha Metro Service Area</h3>
                <p className="text-gray-500 text-center max-w-xs">
                  Serving a 30-mile radius from downtown Omaha, Nebraska
                </p>
              </div>
            )}
          </div>

          {/* Service Area Details */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Areas We Serve
                  </h3>
                  <p className="text-gray-500">Nebraska & Iowa Communities</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {serviceLocations.map((location) => (
                  <div 
                    key={location.name}
                    className="flex items-center"
                    data-testid={`location-${location.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0" />
                    <span className={`${location.primary ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                      {location.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <p className="text-gray-600 text-sm mb-4">
                  Plus surrounding neighborhoods: Millard, Benson, Florence, Aksarben, Dundee, Blackstone, Midtown, West Omaha, North Omaha, South Omaha, Downtown, Old Market
                </p>
              </div>
            </div>

            <div className="bg-black text-white p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4">
                Free On-Site Estimates
              </h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>30-mile radius from downtown Omaha</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Same-week estimate appointments available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Extended coverage available upon request</span>
                </li>
              </ul>

              <a
                href="tel:4028123445"
                className="flex items-center justify-center w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                data-testid="button-call-now"
              >
                <Phone className="w-5 h-5 mr-2" />
                (402) 812-3445
              </a>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            Looking for professional painting services in the Omaha metropolitan area? Ted Croft Painting LLC has been the trusted choice for homeowners across Nebraska and Iowa for over 25 years. 
            <a href="#contact" className="text-black font-semibold hover:underline ml-1">
              Request your free estimate today!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
