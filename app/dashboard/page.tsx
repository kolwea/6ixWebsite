'use client';

import React from 'react';
import { useGoogleMaps } from '../../src/server/GoogleMaps/useGoogleMaps';
import { GoogleMap } from '../../src/server/GoogleMaps/GoogleMap'

export default function Dashboard() {
  const { loader } = useGoogleMaps()
  return (
    <GoogleMap loader={loader} />
  )
}
