const Prodf=()=>{
    return(
        <div className="flex flex-col gap-10 p-6 max-h-[600px] overflow-y-auto no-scrollbar">
        <div className="text-4xl font-semibold">
            Add Job
        </div>
        <form className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
    <label>Type</label>
    <select className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required>
        <option value="">Select Type</option>
        <option value="IT">It</option>
        <option value="Management">Management</option>   
        
      
    </select>
</div>
            <div className="flex flex-col gap-3">
                <label>Field of study</label>
                <input type="text" className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required/>
            </div>
            <div className="flex flex-col gap-3">
                <label>Job Title</label>
                <input type="text" className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required/>
            </div>
            <div className="flex flex-col gap-3">
                <label>Job Description</label>
                <textarea className="w-full md:w-1/2 h-44 rounded-2xl p-2 border bg-[#D9D9D9]" required ></textarea>
            </div>
            <div className="flex flex-col gap-3">
                <label>Activities</label>
                <input type="text" className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required/>
            </div>
            <div className="flex flex-col gap-3">
                <label>Skills</label>
                <input type="text" className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required/>
            </div>
            <div className="flex flex-col gap-3">
                <label>Soft Skills</label>
                <input type="text" className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required/>
            </div>
            <div className="flex flex-col gap-3">
                <label>Core Values</label>
                <input type="text" className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required/>
            </div>
            
            <div className="flex flex-col gap-3">
                <label>Personality</label>
                <input type="text" className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required/>
            </div>
            <div className="flex flex-col gap-3">
                <label>EQ</label>
                <input type="text" className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required/>
            </div>
            <div className="flex flex-col gap-3">
                <label>IQ</label>
                <input type="text" className="w-full md:w-1/2 h-12 rounded-2xl p-2 border bg-[#D9D9D9]" required/>
            </div>
            <div className="flex flex-col gap-3">
                <label>Upload Image</label>
                <input type="file" required  className="w-full md:w-1/2  bg-[#D9D9D9]  rounded-2xl " />
            </div>
            <div className="flex flex-col items-center justify-between md:flex-row">
                <button className="bg-black text-white w-full md:w-40 rounded-2xl h-10 font-semibold mt-4 md:mt-0">Submit</button>
            </div>
        </form>
    </div>
    )
}
export default Prodf;