'use client';
import dynamic from "next/dynamic";
//import AlumniMap from '../../components/AlumniMap';
const LazyMap = dynamic(() => import("../../components/AlumniMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function AlumniMapPage() {
  return <AlumniMap />;
}
