import React from 'react'
import Card from './Card'
import { GrStorage, GrSearch, GrBug } from "react-icons/gr"

const InfoSection = () => {
  return (
    <div className='mt-8'>
        <h2 className='text-center text-5xl font-semibold'>We provide an
            <span className='font-black text-ourpink-light'> OPTIMAL</span> work stack
        </h2>
        <section className='flex flex-row my-24 gap-8'>
            <Card icon={<GrSearch size={'3rem'}/>} title='Research' body="Our research system provides a complete benchmark of the competency and all the analytic stuff based on the actual and future market." label='Examples'/>
            <Card icon={<GrStorage size={'3rem'}/>} title='Storage' body="We've developed our own storage system, that incluedes up to 64gb of cloud storage. It's modular, fast and easy to combine with other stuff" label='Our Storage'/>
            <Card icon={<GrBug  size={'3rem'}/>} title='SEO' body="We take care of the SEO, in order to optimize the positioning, we code for the crawler. This way, they can search and find what Google expect to be in there." label='Optimization'/>
        </section>
    </div>
  )
}

export default InfoSection