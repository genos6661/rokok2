/**
 * BlobBackground - decorative animated blur blobs used as ambient
 * background across hero and section wrappers. Purely presentational.
 */
export default function BlobBackground({ variant = 'default' }) {
  const palettes = {
    default: ['#AEE3F2', '#D6C6F5', '#FFD3BB'],
    warm: ['#FFD3BB', '#FBC7DF', '#FFB980'],
    cool: ['#AEE3F2', '#B7EFD8', '#C6B6F0']
  }
  const colors = palettes[variant] || palettes.default

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        className="blob w-72 h-72 md:w-96 md:h-96 top-[-4rem] left-[-4rem]"
        style={{ background: colors[0], animationDelay: '0s' }}
      />
      <div
        className="blob w-64 h-64 md:w-80 md:h-80 top-1/3 right-[-3rem]"
        style={{ background: colors[1], animationDelay: '2s' }}
      />
      <div
        className="blob w-56 h-56 md:w-72 md:h-72 bottom-[-3rem] left-1/4"
        style={{ background: colors[2], animationDelay: '4s' }}
      />
    </div>
  )
}
