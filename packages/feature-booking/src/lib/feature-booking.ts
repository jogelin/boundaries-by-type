import {createBookingTime} from "@boundaries-by-type/shared-utils";

export function newBooking(userId: string): {userId: string, bookingTime: number} {
  return {userId, bookingTime: createBookingTime()}
}
