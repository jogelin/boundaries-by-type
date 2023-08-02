import {newBooking} from './feature-booking';
import {userIdFaker} from "@boundaries-by-type/shared-spec-utils";

describe('featureBooking', () => {
  it('should create a new booking time', () => {
    const fakeUserId = userIdFaker();
    const booking = newBooking(fakeUserId);

    expect(booking).toMatchObject({userId: fakeUserId, bookingTime: expect.any(Number)})
  });
});
