export interface ContentProvider {
    VGG19_Normal: ModelDescription;
    VGG19_Dropout: ModelDescription;
    VGG19_BatchNormalization: ModelDescription;
}

export type ModelDescription = {
    title: string;
    archFilePath: string;
    confuison_matrix_data: ConfuisonMatrixData[];
}

export interface ConfuisonMatrixData {
    name: string;
    data: Pair[];
}

export interface Pair {
    x: string;
    y: number;
}

export enum ModelName {
    VGG19_Normal = "VGG19_Normal",
    VGG19_Dropout = "VGG19_Dropout",
    VGG19_BatchNormalization = "VGG19_BatchNormalization"
}


export const contentProvider: ContentProvider =
{
    "VGG19_Normal": {
        "title": "VGG19",
        "archFilePath": "assets\\vgg19_arch_normal.svg",
        "confuison_matrix_data": [
            {
                "name": "0 (No DR)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 170
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 8
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 1
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 0
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 0
                    }
                ]
            },
            {
                "name": "1 (Mild)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 3
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 22
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 13
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 0
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 1
                    }
                ]
            },
                
            {
                "name": "2 (Moderate)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 0
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 19
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 65
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 7
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 3
                    }
                ]
            },
            {
                "name": "3 (Severe)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 0
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 0
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 10
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 9
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 2
                    }
                ]
            },
            {
                "name": "4 (Proliferative DR)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 0
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 5
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 13
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 7
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 9
                    }
                ]
            }
        ]
    },
    "VGG19_Dropout": {
        "title": "VGG19\nDropout layers",
        "archFilePath": "assets\\vgg19_arch_dropout.svg",
        "confuison_matrix_data": [
            {
                "name": "0 (No DR)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 176
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 5
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 2
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 0
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 0
                    }
                ]
            },
            {
                "name": "1 (Mild)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 5
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 18
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 18
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 0
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 0
                    }
                ]
            },
                
            {
                "name": "2 (Moderate)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 3
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 13
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 75
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 1
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 1
                    }
                ]
            },
            {
                "name": "3 (Severe)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 0
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 1
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 13
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 2
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 6
                    }
                ]
            },
            {
                "name": "4 (Proliferative DR)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 0
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 2
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 12
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 0
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 14
                    }
                ]
            }
        ]
    },
    "VGG19_BatchNormalization": {
        "title": "VGG19\nBatch normalisation",
        "archFilePath": "assets\\vgg19_arch_batch_normalization.svg",
        "confuison_matrix_data": [
            {
                "name": "0 (No DR)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 188
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 1
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 0
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 0
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 0
                    }
                ]
            },
            {
                "name": "1 (Mild)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 15
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 20
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 5
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 0
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 0
                    }
                ]
            },
                
            {
                "name": "2 (Moderate)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 5
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 23
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 44
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 16
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 2
                    }
                ]
            },
            {
                "name": "3 (Severe)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 0
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 2
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 2
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 14
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 2
                    }
                ]
            },
            {
                "name": "4 (Proliferative DR)",
                "data": [
                    {
                        "x": "0 (No DR)",
                        "y": 2
                    },
                    {
                        "x": "1 (Mild)",
                        "y": 4
                    },
                    {
                        "x": "2 (Moderate)",
                        "y": 7
                    },
                    {
                        "x": "3 (Severe)",
                        "y": 9
                    },
                    {
                        "x": "4 (Proliferative DR)",
                        "y": 6
                    }
                ]
            }
        ]
    }
}
