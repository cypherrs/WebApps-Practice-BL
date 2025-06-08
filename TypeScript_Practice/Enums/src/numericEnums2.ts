enum Status {
    Success = 1,
    Error = 100,
    Loading // 101 (auto-incremented)
}

console.log(
    Status.Success,
    Status.Error,
    Status.Loading
)