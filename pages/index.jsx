import { features, statistics } from '../assets/data/statistics'
import Login from '../components/auth/Login'
import DropDown from '../components/home/DropDown'

export default function Home() {
    return <div className='home__intro'>
        <section className='home__intro__top'>
            <div className='container'>
                <div className="grid grid-cols-12">
                    <div className='home__intro__top__right col-span-12 lg:col-span-8'>
                        <div className='home__intro__top__right__text'>
                            <p>
                                ‘নারীকে বিবাহ করা হয় চারটি জিনিস দেখে। তার সম্পদ দেখে, বংশমর্যাদা দেখে, <br /> রূপ দেখে এবং দ্বীনদারী দেখে। <br /> হে মুমিন! তুমি দ্বীনদার নারী বিবাহ করে ধন্য হয়ে যাও।’
                                <span>(বুখারী : ৫০৯০ )</span>
                            </p>
                        </div>
                        <div className=''>
                            <DropDown />
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-4'>
                        <Login />
                    </div>
                </div>
                <div className='statistics grid grid-cols-2 lg:grid-cols-4'>
                    {
                        statistics.map((st, i) => <div className='statistics__item' key={i}>
                            <div className="flex justify-center"><img src={st.icon} alt="stIcon" /></div>
                            <h1>{st.heading}</h1>
                            <h4>{st.desc}</h4>
                        </div>)
                    }
                </div>
            </div>
        </section>

        <div className='home__intro__bottom'>
            <div className='container'>
                <div className="text-center">
                    <p className='title mb-4'><span>আমাদের বিশেষত্ব</span></p>
                    <p className='feature_heading pb-5'>
                        <span>সম্পূর্ণ রেজিস্ট্রেশন ফ্রী !</span>
                    </p>
                    <div className='grid grid-cols-12'>
                        {
                            features.map((fs, i) => <div className='col-span-12 md:col-span-6' key={i}>
                                <div className="features">
                                    <img src={fs.icon} alt="features" />
                                    <div className='features__text lg:pr-8 md:pr-4'>
                                        <h1>{fs.heading}</h1>
                                        <p>{fs.desc}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}
