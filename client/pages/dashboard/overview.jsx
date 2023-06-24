import dynamic from 'next/dynamic';
import Sidebar from '@/components/dashboard/Sidebar/Sidebar';
const BarChart = dynamic(() => import('@/components/dashboard/Chart/BarChart'), { ssr: false });
const PieChart = dynamic(() => import('@/components/dashboard/Chart/PieChart'), { ssr: false });
import { useRouter } from 'next/router';

const PRIMARY = "rgb(210, 35, 42)";

const barChartData = [
    {
        x: "Fast",
        y: 10,
        pv: 2400,
        label: "Success Percentage (%)",
    },
    {
        x: "Thai",
        y: 40,
        label: "Success Percentage (%)",
    },
    {
        x: "Snakes",
        y: 35,
        label: "Success Percentage (%)",
    },
    {
        x: "Dinner",
        y: 20,
        label: "Success Percentage (%)",
    },
    {
        x: "Lunch",
        y: 30,
        label: "Success Percentage (%)",
    },
    {
        x: "Vegetable",
        y: 40,
        label: "Success Percentage (%)",
    },
    {
        x: "Zero Cal",
        y: 20,
        label: "Success Percentage (%)",
    },
    {
        x: "Thin",
        y: 15,
        label: "Success Percentage (%)",
    },
];

const pieChartData = [
    { name: "Group A", value: 800 },
    { name: "Group B", value: 200 },
];

const Overview = () => {
    const router = useRouter();

    return (
        <Sidebar>
            <div className="container mt-5">
                <h5 className='mb-2'>Foods Overview</h5>

                <div className="paper p-2">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card barChartCard">
                                <BarChart
                                    data={barChartData}
                                    barSizeAtMobile={15}
                                    barRadiusAtMobile={5}
                                />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div
                                className="card mb-3 p-2 skyCard"
                                style={{ backgroundColor: "rgba(69, 82, 213, 0.1)" }}
                            >
                                <div className="card-body">
                                    <p className="card-text">
                                        A full site scan is a review of your entires website that
                                        checks for broken pages, and other issues that could impact
                                        your website. Full site scans let you identify unknown
                                        issues with your website
                                    </p>
                                </div>

                                <button
                                    className="btn w-100 skyCardButton"
                                    style={{ backgroundColor: PRIMARY, color: "white" }}
                                    onClick={() => router.push('/dashboard/foodsManage')}
                                >
                                    Foods Management
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4" />

                <h5 className="mb-2">Users & Ratings Overview</h5>
                <div className="paper p-2">
                    <div className="row pieContainer">
                        <div className="col-md-6">
                            <div className="card pieChartCard">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="pieChartWrapper" data-testid="pie-chart">
                                            <PieChart data={pieChartData} />
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="d-grid">
                                            <div className="pieChartTextWrapper mt-5">
                                                <h6 className="pieChartTitle mb-2">Users / Customers</h6>

                                                <table className="pieChartTextTable">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="pieChartSuccessBox"></div>
                                                            </td>
                                                            <td>
                                                                <span>Success</span>
                                                            </td>
                                                            <td>
                                                                <span>90%</span>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="pieChartFailureBox"></div>
                                                            </td>
                                                            <td>
                                                                <span>Failure</span>
                                                            </td>
                                                            <td>
                                                                <span>80%</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <button
                                                className="btn w-100 skyCardButton2"
                                                style={{ backgroundColor: PRIMARY, color: "white", marginTop: '2rem' }}
                                            >
                                                Users Management
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card pieChartCard">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="pieChartWrapper" data-testid="pie-chart">
                                            <PieChart data={pieChartData} />
                                        </div>
                                    </div>

                                    <div className="col-md-5">
                                        <div className="d-grid">
                                            <div className="pieChartTextWrapper mt-5">
                                                <h6 className="pieChartTitle mb-2">Ratings / Reviews</h6>

                                                <table className="pieChartTextTable">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="pieChartSuccessBox"></div>
                                                            </td>
                                                            <td>
                                                                <span>Success</span>
                                                            </td>
                                                            <td>
                                                                <span>90%</span>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <div className="pieChartFailureBox"></div>
                                                            </td>
                                                            <td>
                                                                <span>Failure</span>
                                                            </td>
                                                            <td>
                                                                <span>80%</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <button
                                                className="btn w-100 skyCardButton2"
                                                style={{ backgroundColor: PRIMARY, color: "white", marginTop: '2rem' }}
                                            >
                                                Review Management
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
};

export default Overview;