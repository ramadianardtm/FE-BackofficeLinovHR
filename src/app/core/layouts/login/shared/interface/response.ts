export interface Response<T> {
    data : Array<T>,
    count : Number,
    success: Boolean,
    message: String
}