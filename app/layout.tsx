import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Woodi Modular Furniture — Premium Kitchens, Wardrobes & Turnkey Projects in Paldi, Ahmedabad',
  description: "Ahmedabad's modular design studio for kitchens, wardrobes, and Turnkey projects. L-shaped, U-shaped kitchens, custom storage, and home interiors tailored to your space. Visit our Paldi showroom. 4.7★ rated.",
  keywords: 'modular Furniture Ahmedabad, modular Furniture Paldi, wardrobe design Ahmedabad, Turnkey projects Ahmedabad, Woodi Furniture',
  openGraph: {
    title: 'Woodi Modular Furniture — Paldi, Ahmedabad',
    description: "Ahmedabad's most personal modular Furniture studio.",
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Woodi Modular furnitures",
              "description": "Premium modular kitchen and wardrobe studio in Paldi, Ahmedabad",
              "telephone": "+919824064960",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Upper Shop 4, Chandanbala Complex, near Paldi Post Office, Fatehpura, nr. DIY store, Bhattha, Paldi",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380007",
                "addressCountry": "IN"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "14"
              }
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
