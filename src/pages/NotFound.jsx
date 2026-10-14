import { Button, Heading, Lead, Section } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <Heading as="h1">Az oldal nem található</Heading>
        <Lead className="mx-auto mt-5">Lehet, hogy elírtad a címet, vagy az oldal átkerült máshová.</Lead>
        <Button to="/" className="mt-8">Vissza a főoldalra</Button>
      </div>
    </Section>
  )
}
