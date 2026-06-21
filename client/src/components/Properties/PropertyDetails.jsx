import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import logo from "../../assets/MAJESTICLOGOPNG.png";
import {
  MapPin,
  Dumbbell,
  Camera,
  Trees,
  Shield,
  Coffee,
  Store,
  Waves,
  Bike,
  Car,
  BatteryCharging,
  Building2,
} from "lucide-react";

const PropertyDetails = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dd8gt2f',
        'template_fld37mu',
        form.current,
        'WaMt-T544Nf-Uv_ua'
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  const gallery = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  ];

  const amenities = [
    { icon: Dumbbell, name: "ATM Facility" },
    { icon: Building2, name: "Basketball court" },
    { icon: Bike, name: "Bicycle Tracks" },
    { icon: Camera, name: "CCTV surveillance" },
    { icon: Trees, name: "Children Play Area" },
    { icon: Coffee, name: "Coffee Shop" },
    { icon: Building2, name: "Community Center" },
    { icon: Store, name: "Convenience Store" },
    { icon: Waves, name: "Jogging/Walking Track" },
    { icon: Trees, name: "Park" },
    { icon: Car, name: "Parking and Transportation Access" },
    { icon: BatteryCharging, name: "Power backup" },
    { icon: Waves, name: "Swimming Pool" },
  ];

  const relatedProperties = [
    {
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
      title: "DLF The Grove",
      location: "Gurgaon",
      price: "₹ 8.24 - 15.38 Cr",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      title: "Godrej Vrikshya",
      location: "Gurgaon",
      price: "₹ 3.81 - 5.66 Cr",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
      title: "Tulip Crimson",
      location: "Gurgaon",
      price: "₹ 5.56 Cr",
    },
  ];

  const experts = [
    {
      name: "Mr. Vishal Laller",
      role: "CM - Sales",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Mr. Saurabh Tuli",
      role: "CM - Sales",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Mr. Yuvansh Kapoor",
      role: "CM - Sales",
      image:
        "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];

  return (
    <div className="bg-[#f5f5f5] min-h-screen text-[#111]">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-[78px]">
            <div className="flex items-center gap-10">
              <img
                src={logo}
                alt="Majestic Landbase"
                className="h-12 object-contain"
              />

              <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium uppercase tracking-wide">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Properties</a>
                <a href="#">Media & Insights</a>
                <a href="#">NRI Corner</a>
                <a href="#">Careers</a>
              </nav>
            </div>

            <button className="bg-[#d4af37] hover:bg-[#c39d22] transition-all px-6 h-11 rounded-lg text-[13px] font-semibold">
              CONTACT US
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <div className="max-w-[1400px] mx-auto px-4 py-5">
        {/* GALLERY */}
        <div className="bg-white rounded-2xl border border-gray-200 p-3">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-xl h-[260px] md:h-[420px]">
                <img
                  src={gallery[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {gallery.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl h-[125px] md:h-[204px]"
                >
                  <img
                    src={item}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 mt-5">
          {/* LEFT */}
          <div className="xl:col-span-8 space-y-5">
            {/* TITLE */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <div>
                  <div className="flex gap-2 mb-3">
                    <span className="bg-black text-white text-[10px] px-2 py-1 rounded">
                      Residential
                    </span>

                    <span className="border border-gray-300 text-[10px] px-2 py-1 rounded">
                      Gurgaon
                    </span>
                  </div>

                  <h1 className="text-[36px] leading-none font-bold">
                    Mahindra Luminare
                  </h1>
                </div>

                <div className="text-left md:text-right">
                  <h2 className="text-[38px] font-bold">
                    ₹ On Request*
                  </h2>

                  <p className="text-gray-500 text-sm mt-1">
                    Starting price. Taxes & charges extra.
                  </p>
                </div>
              </div>
            </div>

            {/* OVERVIEW */}
            <div className="bg-white rounded-2xl border border-gray-200">
              <div className="border-b border-gray-200 p-5">
                <h2 className="font-bold text-[22px]">
                  Property Overview
                </h2>

                <p className="text-sm text-gray-500">
                  Key facts about this listing
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                <div className="border border-gray-200 rounded-xl p-5">
                  <p className="text-gray-500 text-sm">Location</p>

                  <h3 className="font-bold mt-1 text-lg">
                    Gurgaon
                  </h3>
                </div>

                <div className="border border-gray-200 rounded-xl p-5">
                  <p className="text-gray-500 text-sm">Category</p>

                  <h3 className="font-bold mt-1 text-lg">
                    Residential
                  </h3>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="bg-white rounded-2xl border border-gray-200">
              <div className="border-b border-gray-200 p-5">
                <h2 className="font-bold text-[22px]">
                  Property Description
                </h2>

                <p className="text-sm text-gray-500">
                  About the project
                </p>
              </div>

              <div className="p-5 text-[15px] leading-8 text-gray-700 space-y-5">
                <p>
                  Mahindra Luminare Sector 59 Gurgaon is one of the most
                  prestigious ultra-luxury residential developments in
                  Gurugram, crafted by Mahindra Lifespaces.
                </p>

                <p>
                  Spread across approximately 7 acres, Mahindra Luminare
                  is a low-density residential project comprising three
                  elegantly designed high-rise towers with a limited
                  number of residences.
                </p>

                <p>
                  The project offers spacious 3 BHK and 4 BHK apartments
                  along with penthouses, with sizes ranging from
                  approximately 2,900 sq. ft. to over 6,000 sq. ft.
                </p>

                <p>
                  A key highlight of Mahindra Luminare is its private
                  lift lobby concept, where each apartment has direct
                  lift access, offering unmatched privacy and
                  exclusivity.
                </p>

                <p>
                  The project is designed to offer a resort-style living
                  experience with a wide range of world-class amenities.
                </p>
              </div>
            </div>

            {/* AMENITIES */}
            <div className="bg-white rounded-2xl border border-gray-200">
              <div className="border-b border-gray-200 p-5">
                <h2 className="font-bold text-[22px]">Amenities</h2>

                <p className="text-sm text-gray-500">
                  Facilities available in this project
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
                {amenities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl p-4 flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#f9f3dd] flex items-center justify-center">
                        <Icon size={18} className="text-[#d4af37]" />
                      </div>

                      <h3 className="font-medium text-sm">
                        {item.name}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ABOUT DEVELOPER */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <h2 className="font-bold text-[22px]">
                About Developer
              </h2>

              <p className="text-sm text-gray-500">
                Developer and compliance information
              </p>

              <div className="border border-gray-200 rounded-xl p-5 mt-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#f5f5f5]"></div>

                <div>
                  <h3 className="font-bold">Developer</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Developer details will be updated soon.
                  </p>
                </div>
              </div>
            </div>

            {/* EXPERTS */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <h2 className="font-bold text-[22px]">Top Experts</h2>

              <p className="text-sm text-gray-500">
                Talk to our property specialists
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                {experts.map((expert, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={expert.image}
                        alt=""
                        className="w-14 h-14 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="font-bold text-sm">
                          {expert.name}
                        </h3>

                        <p className="text-gray-500 text-xs">
                          {expert.role}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-5">
                      <button className="h-10 rounded-lg border border-[#d4af37] bg-[#fff8e1] text-[#d4af37] font-semibold text-sm">
                        CALL
                      </button>

                      <button className="h-10 rounded-lg border border-gray-300 font-semibold text-sm">
                        EMAIL
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RELATED */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[34px] font-bold">
                  Related Properties
                </h2>

                <button className="border border-[#d4af37] text-[#d4af37] px-5 h-11 rounded-lg text-sm font-semibold">
                  VIEW ALL
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedProperties.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-[260px] object-cover"
                      />

                      <span className="absolute top-4 left-4 bg-black text-white text-[10px] px-2 py-1 rounded">
                        RESIDENTIAL
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-lg">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
                        <MapPin size={14} />
                        {item.location}
                      </div>

                      <div className="flex items-center justify-between mt-5">
                        <h4 className="font-bold text-[#d4af37]">
                          {item.price}
                        </h4>

                        <button className="border border-[#d4af37] text-[#d4af37] px-4 h-9 rounded-lg text-xs font-semibold">
                          VIEW
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="xl:col-span-4 space-y-5">
            {/* PRICE CARD */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 sticky top-[95px]">
              <div className="flex gap-2 mb-4">
                <span className="bg-black text-white text-[10px] px-2 py-1 rounded">
                  Residential
                </span>

                <span className="border border-gray-300 text-[10px] px-2 py-1 rounded">
                  Gurgaon
                </span>
              </div>

              <h2 className="text-[40px] font-bold">
                ₹ On Request*
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Starting price. Taxes & charges extra.
              </p>

              <div className="space-y-3 mt-6">
                <button className="w-full h-12 rounded-lg border border-[#d4af37] bg-[#fff8e1] text-[#d4af37] font-bold">
                  CALL NOW
                </button>

                <button className="w-full h-12 rounded-lg border border-gray-300 font-bold">
                  EMAIL
                </button>
              </div>

              {/* FORM */}
              <div className="bg-[#1f2329] rounded-2xl p-5 mt-6 text-white">
                <h2 className="text-[26px] font-bold text-[#d4af37]">
                  Quick Enquiry
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Get details, pricing, and site visit assistance.
                </p>

                <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-5">
                  <input type="hidden" name="to_name" value="Majestic Landbase" />
                  <input type="hidden" name="to_email" value="ashish@majesticlandbase.com" />
                  <input type="hidden" name="enquiry_type" value="Property Details Enquiry" />

                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-gray-600 h-11 outline-none placeholder:text-gray-400"
                    required
                  />

                  <input
                    type="tel"
                    name="from_number"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-gray-600 h-11 outline-none placeholder:text-gray-400"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    minLength="10"
                    maxLength="10"
                    title="Please enter a 10 digit mobile number"
                    required
                  />

                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-gray-600 h-11 outline-none placeholder:text-gray-400"
                    required
                  />

                  <textarea
                    name="from_message"
                    rows="3"
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-gray-600 outline-none resize-none placeholder:text-gray-400"
                    required
                  ></textarea>

                  <button type="submit" className="w-full h-12 rounded-lg bg-[#d4af37] text-black font-bold">
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-16 bg-[#11151b] text-white">
        <div className="border-b border-gray-800">
          <div className="max-w-[1400px] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-[#d4af37] font-bold uppercase mb-5">
                Property In India
              </h3>

              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Property in Gurgaon</li>
                <li>Property in Mumbai</li>
                <li>Property in Delhi</li>
                <li>Property in Noida</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#d4af37] font-bold uppercase mb-5">
                Residential Properties
              </h3>

              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Birla Navya</li>
                <li>Emaar Serenity Hills</li>
                <li>Tulip Monsella</li>
                <li>Godrej Sora</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#d4af37] font-bold uppercase mb-5">
                Commercial Properties
              </h3>

              <ul className="space-y-3 text-gray-400 text-sm">
                <li>AIPL Joy Central</li>
                <li>Conscient ONE</li>
                <li>Reach Airia Corporate Tower</li>
                <li>Emaar India Business Centre</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#d4af37] font-bold uppercase mb-5">
                SCO Plots
              </h3>

              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Emaar EBD 65</li>
                <li>Emaar EBD 65 NXT</li>
                <li>M3M SCO 113 Market</li>
                <li>Emaar EBD 89</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <img
              src={logo}
              alt="Majestic Landbase"
              className="h-14"
            />

            <p className="text-gray-400 text-sm leading-7 mt-6">
              Majestic Landbase represents the pinnacle of luxury real
              estate.
            </p>
          </div>

          <div>
            <h3 className="font-bold uppercase mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Properties</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Investment Advisory</li>
              <li>NRI Services</li>
              <li>Property Management</li>
              <li>Land & Acquisition</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase mb-5">
              Get In Touch
            </h3>

            <div className="space-y-4 text-sm text-gray-400">
              <p>
                Tulip Lemon Apartment,   Sector 69, Gurgaon
              </p>

              <p>
                <a href="tel:+919560314071" className="hover:text-white transition-colors">+91 95603 14071</a>
              </p>

              <p>ashish@majesticlandbase.com</p>

              {/* <p>www.majesticlandbase.com</p> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-[1400px] mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2026 Majestic Landbase. All Rights Reserved.</p>

            <div className="flex items-center gap-5">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetails;
