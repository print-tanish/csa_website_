'use client';
import dynamic from "next/dynamic";

const AlumniCard = dynamic(() => import("../../components/AlumniCard"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function AlumniCardPage() {
  return <AlumniCard />;
}