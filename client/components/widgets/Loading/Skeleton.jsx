import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const renderSkeleton = (size, inline = false) => {
    let loading = [];
    for (let i = 0; i < size; i++) {
        loading.push(
            <div className={inline ? 'col-md-12 p-4' : 'col-md-4 p-4'}>
                <Skeleton count={size} />
            </div>
        );
    }
    return loading;
};

const Loading = ({ size, inline = false }) => {
    return (
        <SkeletonTheme baseColor="lightgray" highlightColor="rgb(210, 35, 42)" className="row">
            {renderSkeleton(size, inline)}
        </SkeletonTheme>
    );
};

export default Loading;