'use client';
import dynamic from "next/dynamic";

const AlumniCard = dynamic(() => import("../../components/AlumniCard"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function AlumniCardPage() {
  return <AlumniCard />;
}


//import AlumniMap from '../../components/AlumniMap';
// const AlumniMap = dynamic(() => import("../../components/AlumniMap"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
// export default function AlumniMapPage() {
//   return <AlumniMap />;
