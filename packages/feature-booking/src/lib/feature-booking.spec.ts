import {newBooking} from './feature-booking';
import {userIfFaker} from "@boundaries-by-type/shared-spec-utils";
import {createBookingTime} from "@boundaries-by-type/shared-utils";

describe('featureBooking', () => {
  it('should create a new booking time', () => {
    const bookingTime = createBookingTime();
    const fakeUserId = userIfFaker();
    const booking = newBooking(fakeUserId);

    expect(booking).toMatchObject({userId: fakeUserId, bookingTime: expect.any(Number)})
  });
});
