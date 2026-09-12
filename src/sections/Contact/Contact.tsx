import {
  useEffect,
  useRef,
  useState,
  type SyntheticEvent,
} from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './Contact.css'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type FormErrors = {
  name?: string
  company?: string
  email?: string
  whatsapp?: string
  message?: string
}

function Contact() {
  const [state, handleFormspreeSubmit] = useForm('mwlkzzvr')

  const [errors, setErrors] = useState<FormErrors>({})

  const formSuccessTracked = useRef(false)

  const whatsappUrl =
    'https://wa.me/5533998551827?text=Olá,%20vim%20pelo%20site%20da%20Soluverx%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.'

  useEffect(() => {
    if (!state.succeeded || formSuccessTracked.current) {
      return
    }

    formSuccessTracked.current = true

    window.gtag?.('event', 'form_submit_success', {
      event_category: 'lead',
      event_label: 'Formulário de contato',
    })
  }, [state.succeeded])

  function validateName(value: string) {
    const name = value.trim()

    if (!name) {
      return 'Informe seu nome.'
    }

    if (name.length < 2) {
      return 'Digite um nome válido.'
    }

    if (!/[A-Za-zÀ-ÿ]/.test(name)) {
      return 'O nome precisa conter letras.'
    }

    if (!/^[A-Za-zÀ-ÿ' -]+$/.test(name)) {
      return 'Use apenas letras, espaços, hífen ou apóstrofo.'
    }

    return ''
  }

  function validateCompany(value: string) {
    const company = value.trim()

    if (!company) {
      return ''
    }

    if (company.length < 2) {
      return 'Digite um nome de empresa válido.'
    }

    if (!/[A-Za-zÀ-ÿ0-9]/.test(company)) {
      return 'Digite um nome de empresa válido.'
    }

    return ''
  }

  function validateEmail(value: string) {
    const email = value.trim()

    if (!email) {
      return 'Informe seu e-mail.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

    if (!emailRegex.test(email)) {
      return 'Digite um e-mail válido.'
    }

    return ''
  }

  function validateWhatsapp(value: string) {
    const digits = value.replace(/\D/g, '')

    if (!digits) {
      return 'Informe seu WhatsApp.'
    }

    if (digits.length !== 10 && digits.length !== 11) {
      return 'Informe DDD + número com 10 ou 11 dígitos.'
    }

    const ddd = digits.slice(0, 2)

    if (ddd === '00') {
      return 'Informe um DDD válido.'
    }

    if (/^(\d)\1+$/.test(digits)) {
      return 'Digite um número de WhatsApp válido.'
    }

    return ''
  }

  function validateMessage(value: string) {
    const message = value.trim()

    if (!message) {
      return 'Conte brevemente o que você precisa resolver.'
    }

    if (message.length < 20) {
      return 'Escreva pelo menos 20 caracteres.'
    }

    return ''
  }

  function formatWhatsapp(value: string) {
    const digits = value.replace(/\D/g, '').slice(0, 11)

    if (digits.length <= 2) {
      return digits
    }

    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    }

    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(
        2,
        6,
      )}-${digits.slice(6)}`
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(
      2,
      7,
    )}-${digits.slice(7)}`
  }

  function validateForm(form: HTMLFormElement) {
    const formData = new FormData(form)

    const name = String(formData.get('name') || '')
    const company = String(formData.get('company') || '')
    const email = String(formData.get('email') || '')
    const whatsapp = String(formData.get('whatsapp') || '')
    const message = String(formData.get('message') || '')

    const newErrors: FormErrors = {
      name: validateName(name),
      company: validateCompany(company),
      email: validateEmail(email),
      whatsapp: validateWhatsapp(whatsapp),
      message: validateMessage(message),
    }

    Object.keys(newErrors).forEach((key) => {
      const typedKey = key as keyof FormErrors

      if (!newErrors[typedKey]) {
        delete newErrors[typedKey]
      }
    })

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(
    event: SyntheticEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    const form = event.currentTarget

    if (!validateForm(form)) {
      requestAnimationFrame(() => {
        const firstInvalid = form.querySelector(
          '[aria-invalid="true"]',
        ) as HTMLElement | null

        firstInvalid?.focus()
      })

      return
    }

    await handleFormspreeSubmit(event)
  }

  return (
    <section
      className="contact"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="contact__container">
        <div className="contact__content">
          <span className="contact__eyebrow">Contato</span>

          <h2
            className="contact__title"
            id="contact-title"
          >
            Conte o que você precisa resolver.
          </h2>

          <p className="contact__intro">
            Explique sua necessidade, dificuldade ou ideia. A partir disso,
            analisamos o cenário e avaliamos a melhor forma de ajudar.
          </p>

          <div className="contact__direct">
            <span className="contact__direct-label">
              Prefere falar direto?
            </span>

            <a
              className="contact__whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <form
          className="contact__form"
          aria-label="Formulário de contato"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="contact__field">
            <label htmlFor="name">
              Nome <span aria-hidden="true">*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              autoComplete="name"
              minLength={2}
              maxLength={80}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? 'name-error' : undefined
              }
              onBlur={(event) => {
                const error = validateName(event.target.value)

                setErrors((current) => ({
                  ...current,
                  name: error || undefined,
                }))
              }}
              required
            />

            {errors.name && (
              <span
                className="contact__error"
                id="name-error"
                role="alert"
              >
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="company">
              Empresa ou negócio
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Nome da empresa"
              autoComplete="organization"
              maxLength={120}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={
                errors.company
                  ? 'company-error'
                  : undefined
              }
              onBlur={(event) => {
                const error = validateCompany(
                  event.target.value,
                )

                setErrors((current) => ({
                  ...current,
                  company: error || undefined,
                }))
              }}
            />

            {errors.company && (
              <span
                className="contact__error"
                id="company-error"
                role="alert"
              >
                {errors.company}
              </span>
            )}
          </div>

          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="email">
                E-mail <span aria-hidden="true">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="voce@empresa.com"
                autoComplete="email"
                inputMode="email"
                maxLength={150}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email
                    ? 'email-error'
                    : undefined
                }
                onBlur={(event) => {
                  const error = validateEmail(
                    event.target.value,
                  )

                  setErrors((current) => ({
                    ...current,
                    email: error || undefined,
                  }))
                }}
                required
              />

              {errors.email && (
                <span
                  className="contact__error"
                  id="email-error"
                  role="alert"
                >
                  {errors.email}
                </span>
              )}

              <ValidationError
                prefix="E-mail"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="whatsapp">
                WhatsApp <span aria-hidden="true">*</span>
              </label>

              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                autoComplete="tel"
                inputMode="numeric"
                maxLength={15}
                aria-invalid={Boolean(errors.whatsapp)}
                aria-describedby={
                  errors.whatsapp
                    ? 'whatsapp-error'
                    : undefined
                }
                onChange={(event) => {
                  event.target.value = formatWhatsapp(
                    event.target.value,
                  )

                  if (errors.whatsapp) {
                    const error = validateWhatsapp(
                      event.target.value,
                    )

                    setErrors((current) => ({
                      ...current,
                      whatsapp: error || undefined,
                    }))
                  }
                }}
                onBlur={(event) => {
                  const error = validateWhatsapp(
                    event.target.value,
                  )

                  setErrors((current) => ({
                    ...current,
                    whatsapp: error || undefined,
                  }))
                }}
                required
              />

              {errors.whatsapp && (
                <span
                  className="contact__error"
                  id="whatsapp-error"
                  role="alert"
                >
                  {errors.whatsapp}
                </span>
              )}
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="message">
              O que você precisa resolver?{' '}
              <span aria-hidden="true">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Conte um pouco sobre o problema, processo ou ideia..."
              minLength={20}
              maxLength={2000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message
                  ? 'message-error'
                  : undefined
              }
              onBlur={(event) => {
                const error = validateMessage(
                  event.target.value,
                )

                setErrors((current) => ({
                  ...current,
                  message: error || undefined,
                }))
              }}
              required
            />

            {errors.message && (
              <span
                className="contact__error"
                id="message-error"
                role="alert"
              >
                {errors.message}
              </span>
            )}

            <ValidationError
              prefix="Mensagem"
              field="message"
              errors={state.errors}
            />
          </div>

          <p className="contact__required-note">
            * Campos obrigatórios
          </p>

          <button
            className="contact__submit"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting
              ? 'Enviando...'
              : 'Enviar mensagem'}
          </button>

          {state.succeeded && (
            <p
              className="contact__success"
              role="status"
            >
              Mensagem enviada com sucesso. Em breve entraremos em contato.
            </p>
          )}

          {!state.succeeded && state.errors && (
            <ValidationError errors={state.errors} />
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact