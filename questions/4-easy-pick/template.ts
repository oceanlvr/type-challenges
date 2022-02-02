// 范型约束不够早 没有做合适的 conditional type
// https://stackoverflow.com/questions/70663294/whats-the-difference-between-the-two-pickt-k-util-type-implementations
// htts://mp.weixin.qq.com/s?__biz=Mzg3OTYzMDkzMg==&mid=2247486054&idx=1&sn=b5f1d6062627e130f0fe8fa47134e78f&chksm=cf00c55df8774c4b70294b91920945ea7c1dee99c06efeb670afc7c370d35b3c9ccb45bae3fd&scene=178&cur_album_id=2150422842549633025#rd
// https://juejin.cn/post/7000360236372459527?share_token=8b29792c-173d-44b3-8c29-d9e417b08494

// type MyPick<T, K> = [K] extends [keyof T] ? { [P in K]: T[P] } : never
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }