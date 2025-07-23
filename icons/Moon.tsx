import IconProps from "@/structures/iconProps";

export default function(props: IconProps){
    return(
        <svg className="icon spinIcon" width={props.width} height={props.height} viewBox="0 0 800 800" fill={props.color} xmlns="http://www.w3.org/2000/svg">
            <path d="M400 733.333C584.093 733.333 733.333 584.093 733.333 400C733.333 384.577 710.217 382.027 702.24 395.227C664.297 458.02 595.383 500 516.667 500C397.003 500 300 402.997 300 283.333C300 204.615 341.98 135.702 404.773 97.7587C417.973 89.7824 415.423 66.6667 400 66.6667C215.905 66.6667 66.6666 215.905 66.6666 400C66.6666 584.093 215.905 733.333 400 733.333Z" fill={props.color}/>
        </svg>
    )
}