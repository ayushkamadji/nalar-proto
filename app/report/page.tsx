import ReportPageContent from './report-page-content'

const getPredictionUrl = (nik: string, phone: string) => `https://ayushkamadji.pythonanywhere.com/predict?nik=${nik}&phone=${phone}`

async function getData(nik: string, phone: string) {
  const url = getPredictionUrl(nik, phone)
  const res = await fetch(url, { method: 'GET', cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function ReportPage({ searchParams }: { searchParams: { nik: string, phone: string } }) {
  const data = await getData(searchParams.nik, searchParams.phone)
  console.log(data.fraud_indicator)

  return (
    <ReportPageContent data={data} />
  )
}
