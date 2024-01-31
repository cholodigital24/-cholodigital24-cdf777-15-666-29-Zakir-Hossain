const memoriesArray = [
  {
    location: "Gazipur, Dhaka",
    memoryName: "Selim Rahaman",
    visitedDate: "June 7, 2023",
    imageURL:
      "https://i.ibb.co/s9S2GFK/1.jpg",
    hashtags: ["#Memory"],
    description:
      "Councilor Selim Rahaman.",
  },
  {
    location: "Gazipur, Dhaka",
    memoryName: "Marriage",
    visitedDate: "October 19, 2018",
    imageURL:
      "https://i.ibb.co/LtBQHj2/2.jpg",
    hashtags: ["#Memory"],
    description:
      "বন্ধু জসিমের বৌ ভাত অনুষ্ঠানে আমরা সবাই!"
  },
  {
    location: "Konabari, Gazipur",
    memoryName: "Selim Rahaman",
    visitedDate: "April 1, 2019",
    imageURL:
      "https://i.ibb.co/c1FCTR7/3.jpg",
    hashtags: ["#Memory #Food #Lover"],
    description:
      "Selim Rahaman Councilor.",
  },
  {
    location: "Narsingdi",
    memoryName: "Friends",
    visitedDate: "February 22, 2019",
    imageURL: "https://i.ibb.co/p3v89tz/4.jpg",
    hashtags: ["#Memory"],
    description:
      "In Narsingdi.",
  },
  {
    location: "Konabari, Gazipur",
    memoryName: "Kamrul Islam",
    visitedDate: "July 4, 2017",
    imageURL: "https://i.ibb.co/8DjXdGx/5.jpg",
    hashtags: ["#Best #Memory"],
    description:
      "Kamrul Islam.",
  },
  {
    location: "বঙ্গবন্ধু সাফারি পার্ক, গাজীপুর.",
    memoryName: "Friends",
    visitedDate: "September 3, 2017",
    imageURL: "https://i.ibb.co/L6njb1L/6.jpg",
    hashtags: ["#Safari #Park"],
    description:
      "Friends tour.",
  },
  {
    location: "Konabari, Gazipur",
    memoryName: "T-Shirt",
    visitedDate: "May 17, 2023",
    imageURL: "https://i.ibb.co/HzT0z1J/7.jpg",
    hashtags: ["#adda"],
    description:
      "Councilor Office",
  },
  {
    location: "Konabari, Gazipur",
    memoryName: "Friends",
    visitedDate: "November 24, 2017",
    imageURL: "https://i.ibb.co/bNbYHdg/8.jpg",
    hashtags: ["#game #play"],
    description:
      "Playing Game",
  },
];

const Memories = () => {
  return (
    <div>
      <h2 className="text-2xl my-5 font-teko font-300">Memories</h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {memoriesArray.map((dt, index) => {
          return (
            <div key={index} className="relative group">
              <div className="col-span-1 relative h-[200px] overflow-hidden group">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={dt.imageURL}
                    alt=""
                    className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity opacity-0 group-hover:opacity-0"></div>
                <div className="absolute top-5 left-5 transform text-white text-center transition-opacity opacity-100 group-hover:opacity-0">
                  <p className="text-lg font-bold">{dt.memoryName}</p>
                  <p className="text-sm">{dt.visitedDate}</p>
                </div>
              </div>
              <div className="col-span-3 p-4 bg-white bg-opacity-30 h-[200px] overflow-hidden">
                <div className="flex flex-wrap">
                  {dt?.hashtags?.map((hs, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 whitespace-nowrap text-xs bg-gray-300 rounded-md p-[2px] overflow-hidden overflow-ellipsis"
                    >
                      {hs}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{dt.location}</h3>
                <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis">{dt.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Memories;

