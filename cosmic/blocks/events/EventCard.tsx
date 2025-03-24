import Link from "next/link"
import { cn, getFormattedDateFromString } from "../../../cosmic/utils"
import { Calendar, Clock, Pin } from "lucide-react"

export type EventCardType = {
  id: string
  title: string
  slug: string
  metadata: {
    description: string
    location: string
    start_date: string
    start_time: string
    end_date: string
    end_time: string
    image: {
      img_url: string
    }
  }
}

export function EventCard({
  event,
  className,
}: {
  event: EventCardType
  className?: string
}) {
  return (
    <div className={cn("w-full max-w-[1200px] p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg ml-[100px]", className)} data-cosmic-object={event.id}>
        <Link
            className={cn("group relative mb-auto w-full", className)}
            href={`/events/${event.slug}`}
        >
        <div className="mt-2">
          <h1 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
            {event.title}
          </h1>
          <div
            className="pt-2 text-sm text-zinc-500 dark:text-zinc-300"
            dangerouslySetInnerHTML={{ __html: event.metadata.description }}
          />
          <div className="mt-3 space-y-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" aria-label="Event date" />
              <span>{getFormattedDateFromString(event.metadata.start_date)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 mr-1" aria-label="Event time" />
              <span>From {event.metadata.start_time} until {event.metadata.end_time}</span>
              {event.metadata.start_date !== event.metadata.end_date && (
                <span> on {getFormattedDateFromString(event.metadata.end_date)}</span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Pin className="h-4 w-4" aria-label="Event location" />
              <span>{event.metadata.location}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}