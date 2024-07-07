import { app } from "./server";

app.listen(process.env.PORT, () => {
    console.log(`Server running! Port: ${process.env.PORT}`);
});
