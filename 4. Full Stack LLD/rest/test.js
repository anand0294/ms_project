//RugXCvZPNOpuWvuf

const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const DB = "mongodb+srv://anandmohantiwari:asdf1234@cluster0.33ova.mongodb.net/my_database?retryWrites=true&w=majority&appName=Cluster0"

moongoose.connect(DB, {}).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log(err);
})


//Schema
const courseSchema = new moongoose.Schema({
    name: String,
    creator: String,
    publishedDate: { type: Date, default: Date.now },
    isPublished: Boolean,
    rating: Number
});

// Model
const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
    const course = new Course({
        name: "Java",
        creator: "Mohan",
        isPublished: true,
        rating: 5,
    });

    const courseCreated = await course.save();
    console.log("=>", courseCreated);
}

// createCourse();

// Read
async function getCourse() {
    const course = await Course.find({ creator: "Anand" }).select({ rating: true });
    console.log(course);
}

// getCourse();

// Update
async function updateCourse(courseId) {
    let course = await Course.findById(courseId);
    if (!course) {
        console.log("Course not found !!")
        return;
    }
    course.name = "MERN";
    await course.save();
    console.log("Course Updated Successfully !!")
}

// updateCourse("66d36f630e06cdc5715479a2");


// Delete
async function deleteCourse(courseId) {
    let courseDeleted = await Course.findByIdAndDelete(courseId);
    console.log(courseDeleted);
}

// deleteCourse("66d36f911563071c8774099d");
