import { Layout } from '@/components/layout/Layout'
import LocationPage from '@/pages_old/LocationPage'

export default function Location({ params }: { params: { locationSlug: string } }) {
  return (
    <Layout>
      <LocationPage />
    </Layout>
  )
}