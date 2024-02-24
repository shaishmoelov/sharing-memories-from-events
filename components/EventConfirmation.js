import React from 'react';
import QRCode from 'qrcode.react';
import { useNavigate, useParams } from 'react-router-dom';

function EventConfirmation() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const eventUrl = `https://yourdomain.com/event/${eventId}`;

  return (
    <div>
      <h2>Your Event is Ready!</h2>
      <p>Share this QR code with your event attendees:</p>
      <QRCode value={eventUrl} size={256} level={"H"} includeMargin={true} />
      <button onClick={() => navigate(`/gallery/${eventId}`)}>Go to Event Gallery</button>
    </div>
  );
}

export default EventConfirmation;

