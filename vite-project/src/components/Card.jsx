function Card({ data, handleclick }) {
    return (
      <>
        <div className="flex gap-3">
          {data.map((item, index) => (
            <div key={index} className="w-40 rounded bg-yellow-300">
              <div className="w-full h-32 border">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt=""
                  srcSet=""
                />
              </div>
              <h1 className="font-semibold">{item.name}</h1>
              <h2 className="font-medium">{item.profession}</h2>
              <p className="text-sm">{item.description}</p>
              <button
                onClick={() => handleclick(index)} // Correctly passing `index` here
                className="px-4 bg-blue-500 rounded my-3"
              >
                {item.friend ? "Friend" : "Follow"}
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default Card;
  