import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-6xl text-white font-bold mb-6 text-center">Get In Touch</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <Image
              src="/images/footer.jpg"
              alt="Contact section image"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="text-white block mb-2">Name</label>
                <Input id="name" placeholder="Your name" className="text-white" />
              </div>
              <div>
                <label htmlFor="email" className="text-white block mb-2">Email</label>
                <Input id="email" type="email" placeholder="Your email" className="text-white" />
              </div>
              <div>
                <label htmlFor="message" className="text-white block mb-2">Message</label>
                <Textarea id="message" placeholder="Your message" rows={4} className="text-white" />
              </div>
              <Button type="submit" className="w-full text-black py-5 bg-white">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

