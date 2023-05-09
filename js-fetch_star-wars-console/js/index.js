console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      console.error("Bad Response");
    }
    console.log(data);
    console.log(data.results[2].eye_color);
    return data;
  } catch (error) {
    console.error("error");
  }
}

fetchData();

/* console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      const oops = "Something went wrong, please try again later!";
      console.log(oops);
      return oops;
    }

    // console.log(data.results[2].eye_color);
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    console.log("bla!");
  }
}

fetchData();
 */
