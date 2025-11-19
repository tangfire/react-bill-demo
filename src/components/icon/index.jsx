const Icon = ({ type }) => {
    // 图标跑路径都存到阿里服务器了
    return (
        <img
            src={`https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/reactbase/ka/${type}.svg`}
            alt="icon"
            style={{
                width: 20,
                height: 20,
            }}
        />
    )
}

export default Icon