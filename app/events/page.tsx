import { EventsList } from "../../cosmic/blocks/events/EventsList";
export default async function EventListPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-4xl pl-[90px] pt-[50px] font-bold mb-6">Upcoming Events</h1>
        <EventsList query={{ type: "events" }} />
    </div>
    )
}   