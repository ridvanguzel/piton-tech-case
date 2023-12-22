import React from 'react'


const SuccessMetrics = () => {
  return (
    //Success Metrics Section Start Here -->
    <section className="px-6 lg:px-100 py-16 bg-body">
        {/* <!-- Metrics Container--> */}
        <div>
            {/* <!-- Metrics Content --> */}
            <div
                className="flex flex-wrap justify-center  text-center gap-12 md:gap-40 lg:text-left lg:justify-between">
                {/* <!-- Metrics Items --> */}
                <div className="flex flex-col gap-3">
                    <h1 className="text-6xl font-bold text-metrics">350 +</h1>
                    <h3 className="text-2xl font-medium text-white">Clients Worldwide</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-6xl font-bold text-metrics">20 +</h1>
                    <h3 className="text-2xl font-medium text-white">Team Members</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-6xl font-bold text-metrics">100 +</h1>
                    <h3 className="text-2xl font-medium text-white">Projects Completed</h3>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-6xl font-bold text-metrics">85M +</h1>
                    <h3 className="text-2xl font-medium text-white">Revenue Generated</h3>
                </div>
                {/* <!-- Metrics Items --> */}
            </div>
            {/* <!-- Metrics Content --> */}
        </div>
        {/* <!-- Metrics Container --> */}
    </section>
   // Success Metrics Section End Here
  )
}

export default SuccessMetrics
