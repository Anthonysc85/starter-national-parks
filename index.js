const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const errors = validateForm(formData);

    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
        element.style.display = "none";
    }

    Object.keys(errors).forEach((key) => {
        const errorElements = document.querySelector(`#park_${key}.error`);
        errorElements.innerHTML = errors[key];
        errorElements.style.display = "block";
    });
        // if there are no errors
    if (!Object.keys(errors).length) {
        // create a new element
        const parkSection = document.createElement("section");

        // add the park class
        parkSection.classList.add("park");

        // construct the HTML for the element
        const content = `
        <h2>${formData.get("name")}</h2>
        <div class="location">${formData.get("location")}</div>
        <div class="description>${formData.get("description")}</div>
        <button class="rateBtn title="Add to Favorites">&#9734;</button>
        <div class="stats>
            <div class="established stat>
                <h3>Established</h3>
                <div class="value">${moment(formData.get("established")).format(
                    "MMMM D, YYYY"
                )}</div>
                </div>
                <div class="area stat>
                    <h3>Area</h3>
                    <div class="value">${formData.get("area")}</div>
                    </div>
                    <div class="rating stat">
                        <h3>Rating</h3>
                        <div class="value">${formData.get("rating")}</div>
                    </div>
                </div>`;
                // set the innerHTML
                parkSection.innerHTML = content;

                // append to the main element
                document.querySelector("main").appendChild(parkSection);
    }





    console.log("The form was submitted");
};

function validateExists(value) {
    return value && value.trim();
};

function validateNumber(value) {
    return !isNaN(value);
};

function validateRange(value, min, max) {
    return value >= min && value <= max;
};

function validateForm(formData) {
    const errors = {};

    if (!validateExists(formData.get("name"))) {
        errors.name = "Please enter a name";
    }

    if (!validateExists(formData.get("rating"))) {
        errors.rating = "Please enter a rating";
      } else {
        //check if the rating is a number
        if (!validateNumber(formData.get("rating"))) {
          errors.rating = "Rating must be a number";
        } else {
          // since it is a number, convert it
          const rating = Number.parseFloat(formData.get("rating"));
          //check that the rating is between 1 and 5 inclusive
          if (!validateRange(rating, 1, 5)) {
            errors.rating = "Rating must be between 1 and 5 inclusive";
          }
        }
      }

    if (!validateExists(formData.get("description"))) {
        errors.rating = "Please enter short description";
    }

    if (!validateExists(formData.get("established"))) {
        errors.rating = "Please enter date";
    }

    if (!validateExists(formData.get("area"))) {
        errors.rating = "Please enter the area of the park";
    }

    if (!validateExists(formData.get("location"))) {
        errors.rating = "Please enter the location of the park";
    }

    return errors;

}

const main = () => {
    const form = document.querySelector("#parkForm");

    form.addEventListener("submit", submitHandler);

    window.addEventListener("DOMContentLoaded", main);

};

