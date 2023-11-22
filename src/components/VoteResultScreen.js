import React, { useEffect, useState } from "react";

function VoteResultScreen() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nacos-vote.onrender.com/candidate/results"
        );
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getPostName = (post) => {
    switch (post) {
      case 1:
        return "President";
      case 2:
        return "Vice President";
      case 3:
        return "Financial Secretary";
      case 4:
        return "General Secretary";
      case 5:
        return "Assistant General Secretary";
      case 6:
        return "Public Relations Officer";
      case 7:
        return "Librarian";
      case 8:
        return "Assistant Librarian";
      case 9:
        return "Social Director";
      case 0:
        return "Sports Director";
      default:
        return "Unknown";
    }
  };

  const highlightWinner = (postCandidates) => {
    if (postCandidates.length === 0) {
      return [];
    }

    const winner = postCandidates.reduce((prev, current) =>
      prev.votes > current.votes ? prev : current
    );
    return postCandidates.map((candidate) => ({
      ...candidate,
      isWinner: candidate.id === winner.id,
      backgroundColor: candidate.id === winner.id ? "#00FF00" : "#fff", // Highlight winner with green, others with yellow
    }));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2> Nacos Vote Results</h2>
      {Array.from({ length: 10 }, (_, index) => index).map((post) => {
        const postCandidates = candidates.filter(
          (candidate) => candidate.post === post
        );

        const candidatesWithHighlight = highlightWinner(postCandidates);

        return (
          <div
            key={post}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "20px",
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "10px",
            }}
          >
            <h3>{getPostName(post)}</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {candidatesWithHighlight.map((candidate) => (
                <div
                  key={candidate.id}
                  style={{
                    margin: "10px",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    background: candidate.backgroundColor,
                  }}
                >
                  <p>{`${candidate.firstname} ${candidate.lastname}`}</p>
                  <p>Votes: {candidate.votes}</p>
                  {candidate.isWinner && <p>Winner!</p>}
                  <img
                    src={candidate.image_url}
                    alt={`${candidate.firstname} ${candidate.lastname}`}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VoteResultScreen;
