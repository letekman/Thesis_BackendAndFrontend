import React, { ReactElement } from "react";
import { orangeThemeColor, navyBlueThemeColor } from "./configuration";
import { ConfuisonMatrixData } from "./contentProviderFile";
import { CenterWrapper } from "./commonComponents";
import ReactApexChart from "react-apexcharts";


type ConfusionMatrixProps = {
    data: ConfuisonMatrixData[]
}

export const ConfusionMatrix = (props: ConfusionMatrixProps): ReactElement => {
    const options = {
        dataLabels: {
            style: {
                colors: [navyBlueThemeColor]
            }
        },
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
            selection: {
                enabled: false
            }
        },
        colors: [orangeThemeColor],
        xaxis: {
            type: 'category' as const,
            tickPlacement: 'between',
            labels: {
                style: {
                    colors: 'white'
                }
            },
            position: 'bottom',
            title: {
                text: "Predicted labels",
                style: {
                    color: 'white',
                    fontSize: '16px'
                },
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: 'white'
                }
            },
            title: {
                text: "True labels",
                style: {
                    color: 'white',
                    fontSize: '16px'
                }
            }
        },
        tooltip: {
            enabled: false
        },
        title: {
            text: `Confusion matrix for model obtained during training`,
            align: 'center' as const,
            style: {
                color: 'white',
                fontSize: '20px'
            }
        },
        plotOptions: {
            heatmap: {
                distributed: true
            }
        }
    };

    const series = props.data;


    return (
        <CenterWrapper>
            <ReactApexChart options={options} series={series} type={"heatmap"} height={400} style={{ width: '90%' }} />
        </CenterWrapper >
    );
}