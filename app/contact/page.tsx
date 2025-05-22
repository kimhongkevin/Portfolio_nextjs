'use client'

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'
import { socialMedia, ContactInfoItems, SuccessIcon } from '@/constants'

// Type Definitions
interface FormData {
  name: string
  email: string
  message: string
}
interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function Contact(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format"
    }
    if (!formData.message.trim()) errors.message = "Message is required"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormErrors({})
    setSubmitError(null)

    if (!validateForm()) return
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
      })

      if (!res.ok) throw new Error('Failed to send message.')

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (error: any) {
      setSubmitError(error.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full py-10 px-6 sm:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500 mb-12">Let me work with You</h2>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-500 mb-12">Please Get In Touch</h2>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

          {/* Left Panel */}
          <div className="bg-gradient-to-br from-sky-100 to-sky-200 p-6 sm:p-10 w-full lg:w-5/12 flex flex-col">
            <h3 className="text-2xl font-bold text-sky-500 mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {ContactInfoItems.map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="bg-sky-200 p-2 rounded-full text-sky-500">{item.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-700">{item.title}</h4>
                    <p className="text-slate-700 mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-slate-700 mb-4">Follow Me</h4>
              <ul className="flex gap-4 mt-3">
                {socialMedia.map((social) => (
                  <li key={social.title}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.title}
                      className="bg-white p-2 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Image src={social.icon} alt={social.title} width={24} height={24} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Panel */}
          <div className="p-6 sm:p-10 w-full lg:w-7/12">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <SuccessIcon />
                <h3 className="text-xl font-bold mb-2 text-green-600">Thank You!</h3>
                <p className="mb-4 text-green-600">Your message has been sent successfully.</p>
                <button onClick={() => setSubmitted(false)} className="text-sky-500 hover:text-sky-700 font-medium" type="button">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-700 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {['name', 'email', 'message'].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-sm font-medium text-slate-700 mb-1 capitalize">{field}</label>
                      {field === 'message' ? (
                        <textarea
                          id={field}
                          name={field}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What would you like to say?"
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-sky-500`}
                          aria-invalid={!!formErrors.message}
                        />
                      ) : (
                        <input
                          id={field}
                          name={field}
                          type={field === 'email' ? 'email' : 'text'}
                          value={formData[field as keyof FormData]}
                          onChange={handleChange}
                          placeholder={field === 'email' ? 'your.email@example.com' : 'Your name'}
                          className={`w-full px-4 py-3 rounded-lg border ${formErrors[field as keyof FormErrors] ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-sky-500`}
                          aria-invalid={!!formErrors[field as keyof FormErrors]}
                        />
                      )}
                      {formErrors[field as keyof FormErrors] && (
                        <p className="mt-1 text-sm text-red-500">{formErrors[field as keyof FormErrors]}</p>
                      )}
                    </div>
                  ))}

                  <button type="submit" disabled={isSubmitting} className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitError && <p className="mt-4 text-sm text-red-500 text-center">{submitError}</p>}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
