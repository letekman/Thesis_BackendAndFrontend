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
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: 'white'
                }
            }
        },
        tooltip: {
            enabled: false
        },
        title: {
            text: `Confusion matrix for model obtained during training - FAKE DATA`,
            align: 'center' as const,
            style: {
                color: 'white'
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