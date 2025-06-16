'use client';

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { CLINIC_LOCATION_PRIMARY, CLINIC_LOCATION_INDIA_ONLINE } from '@/lib/constants';
import type { ClinicLocation } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export function MapComponent() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    // if APIProvider or Map has issues with SSR without an API key.
    return (
      <Card className="w-full shadow-lg">
        <CardHeader>
          <CardTitle>Our Clinic Locations</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] flex items-center justify-center bg-muted rounded-b-md">
          <p className="text-muted-foreground">Loading map...</p>
        </CardContent>
      </Card>
    );
  }
  
  if (!apiKey) {
    return (
      <Card className="w-full shadow-lg">
        <CardHeader>
          <CardTitle>Our Clinic Locations</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px] flex flex-col items-center justify-center bg-muted rounded-b-md text-center">
          <p className="text-destructive-foreground bg-destructive p-2 rounded-md mb-2">
            Google Maps API Key is missing. Map functionality is disabled.
          </p>
          <p className="text-muted-foreground">Please contact support or check configuration.</p>
          <div className="mt-4 text-left">
            <h4 className="font-semibold">{CLINIC_LOCATION_PRIMARY.name}</h4>
            <p className="text-sm text-muted-foreground">{CLINIC_LOCATION_PRIMARY.address}</p>
            <h4 className="font-semibold mt-2">{CLINIC_LOCATION_INDIA_ONLINE.name}</h4>
            <p className="text-sm text-muted-foreground">{CLINIC_LOCATION_INDIA_ONLINE.address}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const locations: ClinicLocation[] = [CLINIC_LOCATION_PRIMARY, CLINIC_LOCATION_INDIA_ONLINE];
  // For map centering, typically use the primary location or calculate bounds
  const centerPosition = { lat: CLINIC_LOCATION_PRIMARY.lat, lng: CLINIC_LOCATION_PRIMARY.lng };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle>Our Clinic Locations</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px] p-0 rounded-b-md overflow-hidden">
        <APIProvider apiKey={apiKey}>
          <Map
            defaultCenter={centerPosition}
            defaultZoom={CLINIC_LOCATION_INDIA_ONLINE.name.includes("Online") ? 3 : 10} // Zoom out more if showing India as general
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId="naturopath-map" // Optional: for cloud-based map styling
            className="w-full h-full"
          >
            {locations.map((location) => (
              <AdvancedMarker
                key={location.name}
                position={{ lat: location.lat, lng: location.lng }}
                title={location.name}
              >
                <Pin background={'hsl(var(--primary))'} borderColor={'hsl(var(--primary-foreground))'} glyphColor={'hsl(var(--primary-foreground))'} />
              </AdvancedMarker>
            ))}
          </Map>
        </APIProvider>
      </CardContent>
    </Card>
  );
}
