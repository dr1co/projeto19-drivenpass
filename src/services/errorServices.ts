export default function handleError(code: string) {
    switch(code) {
        case "RegisteredUser" || "IncorrectPassword":
            return 401;
        case "ServerProblem":
            return 500;
        case "NotFound":
            return 404;
        case "TitleCreated":
            return 422;
        default:
            return 418;
    }
}