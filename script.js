// Client 
const token = 'BQD01y1tfltqXUmsb6WTLcYOS4Vy47lZqwcCa19JqpJcc8JkWTeoa2kqZLrb3cYi9QyhiR8Mt0lKUZ_twovFGfmiyyMMoF7ifRPXHC6tcfjqCuYI5qP4pNiTr1pTn-sW5zjn2WG7qQH1GNAqeCB5xbIqsSSFvh466DP2qp5xhxuftALbzQIRuoCpb-V9Ua6EcJHJNBpj7t1axt-z5EBxJDkRzni5axcR9syZVHZCScsax0szNiifvnlx9Jj3pIsSSyssLoz0VR_AoJIJkdVcNB0R';
const url = "https://api.spotify.com/v1/artists?ids=2GoeZ0qOTt6kjsWW4eA6LS%2C0oOet2f43PA68X5RxKobEy%2C06HL4z0CvFAxyc27GXpf02%2C6VuMaDnrHyPL1p4EHjYLi7%2C4YRxDV8wJFPHPTeXepOstw%2C4IKVDbCSBTxBeAsMKjAuTs%2C1dVygo6tRFXC8CSWURQJq2%2C4zCH9qm4R2DADamUHMCa6O%2C1tqysapcCh1lWEAc9dIFpa%2c4zCH9qm4R2DADamUHMCa6O%2c4YRxDV8wJFPHPTeXepOstw"

const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
})

 
async function getData() {
    try {
        const response = await fetch(request);
        const data = await response.json();
        console.log(data);
        
        // Get the data-container element
        const dataContainer = document.getElementById("data-container");

        // Create an HTML structure to display the data (modify as needed)
        const artistList = document.createElement("ul");

        // Loop through the data and create list items for each artist
        data.artists.forEach(artist => {
            const listItem = document.createElement("li");
            listItem.textContent = `Artist Name: ${artist.name}, Popularity: ${artist.popularity}`;
            artistList.appendChild(listItem);
        });

        // Append the artistList to the data-container
        dataContainer.appendChild(artistList);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
getData()