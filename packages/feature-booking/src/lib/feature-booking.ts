import {createBookingTime} from "@boundaries-by-type/shared-utils";
import {userIdFaker} from "@boundaries-by-type/shared-spec-utils";

export function newBooking(userId: string): {userId: string, bookingTime: number} {
  const fke = userIdFaker();
  return {userId, bookingTime: createBookingTime()}
}
