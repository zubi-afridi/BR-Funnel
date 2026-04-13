import { BadgeIcon, ReportIcon, UserIcon, TickOfGuaranteeIcon, LayerIcon } from '../assets/icons'
import Button from '../components/common/Button'
const Guarantee = () => {
  const features = [
    { id: 1, title: '100% Transparent Reporting', description: 'Real-time access to all metrics and campaign performance', Icon: ReportIcon },
    { id: 2, title: 'Dedicated Account Manager', description: 'Direct line to your strategic partner, not a ticket system', Icon: UserIcon },
    { id: 3, title: '30-Day Performance Commitment', description: 'See measurable improvements or we work until you do', Icon: BadgeIcon },
    { id: 4, title: 'SLA-Based Delivery Framework', description: 'Guaranteed response times and milestone commitments', Icon: TickOfGuaranteeIcon }
  ];
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(180deg,#793FEE_0%,#26FDFE_100%)] blur-[5px]" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[15%] w-[80%] h-full opacity-20 blur-3xl"><LayerIcon className="w-full h-full rotate-180" /></div>
      </div>
      <div className="relative mx-auto w-full max-w-[1152px] px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:px-[58px] lg:py-[60px]">
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-6 flex flex-col items-center">
            <div className="relative z-10 h-[70px] w-[70px] p-[17px] flex items-center justify-center rounded-[17px] bg-linear-to-b from-[#793FEE] to-[#26FDFE] shadow-[0_0_35.212px_0_rgba(124,58,237,0.40)] overflow-hidden">
              <BadgeIcon className="w-full h-full text-white" />
            </div>
          </div>
          <div className="text-center mb-14">
            <h2 className="text-white font-semibold tracking-[-0.02em] sm:text-2xl lg:text-[32px] text-xl">Results Backed by Performance Guarantee</h2>
            <p className="mx-auto mt-2 text-sm text-[#B9B9B9] sm:text-base">Your growth is our commitment. We stand behind every campaign.</p>
          </div>
          <div className="mx-auto grid w-full max-w-[1020px] grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map(({ id, title, description, Icon }) => (
              <div key={id} className="group relative flex items-start gap-6 bg-white/2 border-[0.88px] border-white/5 p-[28px] rounded-[17px] transition-all duration-500 hover:bg-white/5 hover:border-white/15 hover:-translate-y-1">
                <div className="shrink-0 flex items-center justify-center w-[49px] h-[49px] rounded-[12px] bg-[linear-gradient(135deg,rgba(37,99,235,0.20)_0%,rgba(124,58,237,0.20)_100%)] border-[0.88px] border-[#793FEE] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_-5px_rgba(110,72,232,0.4)] group-hover:border-[#6e48e8]/50 overflow-hidden">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-[#FFF] font-[Poppins] text-[17.6px] font-semibold leading-[26.4px] mb-1 group-hover:text-[#26FDFE] transition-colors duration-300">{title}</h3>
                  <p className="text-[#B9B9B9] font-[Poppins] text-[14px] font-normal leading-[22.8px]">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 sm:mt-16">
            <Button variant="primary" className="w-full sm:w-auto px-[49px]! py-[16px]! rounded-[14px]! bg-[linear-gradient(90deg,#793FEE_0%,#26FDFE_106.88%)]! gap-[7.734px]! min-h-0! shadow-[0_0_20px_rgba(31,217,249,0.3)] hover:shadow-[0_0_30px_rgba(31,217,249,0.5)] transition-shadow duration-300 text-base! font-semibold! leading-[24px]! text-white! text-center!">Start Risk Free</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Guarantee