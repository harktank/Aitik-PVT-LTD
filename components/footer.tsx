import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a5e] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-2">
                <Image src="/logo.png" alt="AITIK Software Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="font-bold text-xl">AITIK Software</span>
            </div>
            <p className="text-gray-300 mb-4">Transforming businesses with next-gen technology solutions since 2022.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-red-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-red-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-red-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact" },
                { name: "Get in Touch", href: "/get-in-touch" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Web Development", href: "/services" },
                { name: "Mobile Solutions", href: "/services" },
                { name: "Software Development", href: "/services" },
                { name: "Data Analytics", href: "/services" },
                { name: "Cloud Services", href: "/services" },
                { name: "IT Consulting", href: "/services" },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Juhi Niharika Mirage, 9th Floor, office no. 911, Sector -10, Kharghar- 410210
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">+91 96534 18049 / +91 98606 07791</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">info@aitiksoftware.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} AITIK Software Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
