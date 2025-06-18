import React from "react";

const TermsConditionDetails = () => {
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 md:px-12 lg:px-32 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 text-center">
        Terms and Conditions for Car and Bus Services
      </h1>

      <section className="space-y-6 text-sm sm:text-base leading-relaxed">
        {/* Introduction */}
        <div>
          <h2 className="text-xl font-semibold text-blue-800">Introduction</h2>
          <p>
            Welcome to <span className="font-bold">ANT TRAVELS</span> ("we",
            "our", "us"). By using our car and bus services, you agree to comply
            with and be bound by the following terms and conditions. Please
            review these terms carefully before using our services.
          </p>
        </div>

        {/* 1. Definitions */}
        <div>
          <h2 className="text-lg font-semibold text-blue-800">
            1. Definitions
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Service:</strong> Transportation services provided by our
              cars and buses.
            </li>
            <li>
              <strong>User/Customer:</strong> Any individual or entity utilizing
              our services.
            </li>
            <li>
              <strong>Booking:</strong> The reservation of our car or bus
              services.
            </li>
            <li>
              <strong>Driver:</strong> The individual operating the car or bus
              provided by us.
            </li>
          </ul>
        </div>

        {/* 2. Booking and Reservations */}
        <div>
          <h2 className="text-lg font-semibold text-blue-800">
            2. Booking and Reservations
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Booking Confirmation:</strong> Bookings must be confirmed
              through our website, app, or customer service. A confirmation
              email or message will be sent to the user.
            </li>
            <li>
              <strong>Payment:</strong> Payment must be made at the time of
              booking unless otherwise agreed. We accept various payment methods
              including credit/debit cards and online transfers.
            </li>
            <li>
              <strong>Cancellation Policy:</strong> Users can cancel bookings
              within a specified period before the service date. A cancellation
              fee may apply.
            </li>
            <li>
              <strong>Changes to Booking:</strong> Any changes (e.g., time,
              date, destination) should be communicated as early as possible.
              Additional charges may apply.
            </li>
          </ul>
        </div>

        {/* 3. Service Usage */}
        <div>
          <h2 className="text-lg font-semibold text-blue-800">
            3. Service Usage
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>User Conduct:</strong> Users must behave respectfully and
              lawfully. Inappropriate behavior may result in termination without
              a refund.
            </li>
            <li>
              <strong>Safety and Compliance:</strong> All users must follow
              safety rules. Seat belts must be worn at all times.
            </li>
            <li>
              <strong>Luggage and Personal Items:</strong> Users are responsible
              for their belongings. We are not liable for loss or damage.
            </li>
          </ul>
        </div>

        {/* 4. Responsibilities */}
        <div>
          <h2 className="text-lg font-semibold text-blue-800">
            4. Responsibilities
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Our Responsibility:</strong> We provide safe, timely, and
              efficient services. We will communicate in case of unforeseen
              issues.
            </li>
            <li>
              <strong>User Responsibility:</strong> Accurate information and
              special requirements should be shared at booking time.
            </li>
          </ul>
        </div>

        {/* 5. Limitation of Liability */}
        <div>
          <h2 className="text-lg font-semibold text-blue-800">
            5. Limitation of Liability
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Service Disruption:</strong> We are not liable for delays
              or issues due to traffic, weather, or mechanical failures.
            </li>
            <li>
              <strong>Personal Injury or Property Damage:</strong> We are not
              liable unless due to our negligence.
            </li>
          </ul>
        </div>

        {/* 6. Privacy and Data Protection */}
        <div>
          <h2 className="text-lg font-semibold text-blue-800">
            6. Privacy and Data Protection
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Personal Information:</strong> We collect and use data per
              our Privacy Policy. Use of our services means you consent to this.
            </li>
            <li>
              <strong>Data Security:</strong> We take reasonable steps to
              protect your data from unauthorized access or disclosure.
            </li>
          </ul>
        </div>

        {/* 7. Changes to Terms */}
        <div>
          <h2 className="text-lg font-semibold text-blue-800">
            7. Changes to Terms and Conditions
          </h2>
          <p>
            We reserve the right to change these terms anytime. Changes are
            effective upon posting. Users should review periodically.
          </p>
        </div>

        {/* 8. Governing Law */}
        <div>
          <h2 className="text-lg font-semibold text-blue-800">
            8. Governing Law
          </h2>
          <p>
            These terms are governed by applicable law. Any disputes will be
            resolved in the courts.
          </p>
        </div>

        {/* 9. Contact Information */}
        <div>
          <h2 className="text-lg font-semibold text-blue-800">
            9. Contact Information
          </h2>
          <p className="mb-2 font-semibold">ANT TRAVELS</p>
          <p>
            B-128, Transport Nagar, Sector-69, Noida, 201301 (Uttar Pradesh)
            India
          </p>
          <p>Tel: +91-1800 102 7408</p>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionDetails;
