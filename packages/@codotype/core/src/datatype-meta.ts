import { Datatype, Datatypes } from "./datatype";

// // // //

export interface DatatypeMeta {
    value: Datatype;
    label: string;
    description: string;
    icon: string;
}

// Defines datatype metadata
export const DATATYPE_META: {
    [key in Datatypes]: DatatypeMeta;
} = {
    [Datatypes.ID]: {
        value: Datatypes.ID,
        label: "ID",
        description: "Unique ID",
        icon: "fa fa-tag",
    },
    [Datatypes.AUTO_INCREMENTED_ID]: {
        value: Datatypes.AUTO_INCREMENTED_ID,
        label: "Auto-incremented ID",
        description: "Automatically incremented numeric ID",
        icon: "fa fa-tag",
    },
    [Datatypes.UUID]: {
        value: Datatypes.UUID,
        label: "UUID",
        description: "Unique identifiers",
        icon: "fa fa-tag",
    },
    [Datatypes.OBJECT_ID]: {
        value: Datatypes.OBJECT_ID,
        label: "ObjectID",
        description: "A MongoDB ObjectID",
        icon: "fa fa-table",
    },
    [Datatypes.STRING]: {
        value: Datatypes.STRING,
        label: "String",
        description: "Titles, names, and labels",
        icon: "fa fa-quote-left",
    },

    [Datatypes.TEXT]: {
        value: Datatypes.TEXT,
        label: "Text",
        description: "Descriptions, paragraphs, and articles",
        icon: "fa fa-align-left",
    },

    [Datatypes.BOOLEAN]: {
        value: Datatypes.BOOLEAN,
        label: "Boolean",
        description: "Yes or no, true or false",
        icon: "fa fa-toggle-on",
    },

    [Datatypes.INT]: {
        value: Datatypes.INT,
        label: "Integer",
        description: "Whole numbers",
        icon: "fa fa-hashtag",
    },

    [Datatypes.BIGINT]: {
        value: Datatypes.BIGINT,
        label: "BigInt",
        description: "Data in BigInt format",
        icon: "fa fa-hashtag",
    },

    [Datatypes.FLOAT]: {
        value: Datatypes.FLOAT,
        label: "Float",
        description: "Numbers with decimals",
        icon: "fa fa-divide",
    },

    [Datatypes.DECIMAL]: {
        value: Datatypes.DECIMAL,
        label: "Decimal",
        description: "Data in Decimal format",
        icon: "fa fa-hashtag",
    },

    [Datatypes.NUMERIC]: {
        value: Datatypes.NUMERIC,
        label: "Numeric",
        description: "Data in Numeric format",
        icon: "fa fa-hashtag",
    },

    [Datatypes.DATE]: {
        value: Datatypes.DATE,
        label: "Date",
        description: "Calendar date, no time of day",
        icon: "far fa-calendar",
    },

    [Datatypes.TIME]: {
        value: Datatypes.TIME,
        label: "Time",
        description: "Time of day, no date",
        icon: "far fa-clock",
    },

    [Datatypes.DATETIME]: {
        value: Datatypes.DATETIME,
        label: "Datetime",
        description: "Event dates, deadlines, opening hours",
        icon: "far fa-calendar-alt",
    },

    [Datatypes.TIMESTAMP]: {
        value: Datatypes.TIMESTAMP,
        label: "Timestamp",
        description: "Data in Timestamp format",
        icon: "fa fa-hashtag",
    },

    [Datatypes.BINARY]: {
        value: Datatypes.BINARY,
        label: "Binary",
        description: "Data in Binary format",
        icon: "fa fa-hashtag",
    },

    [Datatypes.JSON]: {
        value: Datatypes.JSON,
        label: "JSON",
        description: "Data in JSON format",
        icon: "fa fa-code",
    },

    [Datatypes.JSONB]: {
        value: Datatypes.JSONB,
        label: "JSONB",
        description: "Data in JSONB format",
        icon: "fa fa-code",
    },

    [Datatypes.OBJECT]: {
        value: Datatypes.OBJECT,
        label: "Object",
        description: "Data in JSONB format",
        icon: "fa fa-code",
    },

    // // // //
    // Array Datatypes
    [Datatypes.ID_ARRAY]: {
        value: Datatypes.ID_ARRAY,
        label: "ID Array",
        description: "An array of IDs",
        icon: "fa fa-tags",
    },

    [Datatypes.AUTO_INCREMENTED_ID_ARRAY]: {
        value: Datatypes.AUTO_INCREMENTED_ID_ARRAY,
        label: "Auto Incremented ID Array",
        description: "An array of Auto Incremented IDs",
        icon: "fa fa-tags",
    },

    [Datatypes.UUID_ARRAY]: {
        value: Datatypes.UUID_ARRAY,
        label: "UUID Array",
        description: "An array of UUIDs",
        icon: "fa fa-tags",
    },

    [Datatypes.OBJECT_ID_ARRAY]: {
        value: Datatypes.STRING_ARRAY,
        label: "ObjectID Array",
        description: "An array of ObjectIDs",
        icon: "fa fa-tags",
    },

    [Datatypes.STRING_ARRAY]: {
        value: Datatypes.STRING_ARRAY,
        label: "String Array",
        description: "An array of Strings",
        icon: "fa fa-tags",
    },

    [Datatypes.TEXT_ARRAY]: {
        value: Datatypes.TEXT_ARRAY,
        label: "Text Array",
        description: "An array of Text",
        icon: "fa fa-tags",
    },

    [Datatypes.INT_ARRAY]: {
        value: Datatypes.INT_ARRAY,
        label: "Integer Array",
        description: "An array of Integers",
        icon: "fa fa-tags",
    },

    [Datatypes.BIGINT_ARRAY]: {
        value: Datatypes.BIGINT_ARRAY,
        label: "BigInt Array",
        description: "An array of BigInts",
        icon: "fa fa-tags",
    },

    [Datatypes.FLOAT_ARRAY]: {
        value: Datatypes.FLOAT_ARRAY,
        label: "Float Array",
        description: "An array of Floats",
        icon: "fa fa-tags",
    },

    [Datatypes.DECIMAL_ARRAY]: {
        value: Datatypes.DECIMAL_ARRAY,
        label: "Decimal Array",
        description: "An array of Decimals",
        icon: "fa fa-tags",
    },

    [Datatypes.NUMERIC_ARRAY]: {
        value: Datatypes.NUMERIC_ARRAY,
        label: "Numeric Array",
        description: "An array of Numerics",
        icon: "fa fa-tags",
    },

    [Datatypes.BOOLEAN_ARRAY]: {
        value: Datatypes.BOOLEAN_ARRAY,
        label: "Boolean Array",
        description: "An array of Booleans",
        icon: "fa fa-tags",
    },

    [Datatypes.DATE_ARRAY]: {
        value: Datatypes.DATE_ARRAY,
        label: "Date Array",
        description: "An array of Dates",
        icon: "fa fa-tags",
    },

    [Datatypes.TIME_ARRAY]: {
        value: Datatypes.TIME_ARRAY,
        label: "Time Array",
        description: "An array of Times",
        icon: "fa fa-tags",
    },

    [Datatypes.DATETIME_ARRAY]: {
        value: Datatypes.DATETIME_ARRAY,
        label: "Datetime Array",
        description: "An array of Datetimes",
        icon: "fa fa-tags",
    },

    [Datatypes.TIMESTAMP_ARRAY]: {
        value: Datatypes.TIMESTAMP_ARRAY,
        label: "Timestamp Array",
        description: "An array of Timestamps",
        icon: "fa fa-tags",
    },

    // // // //
    // Special Datatypes
    [Datatypes.SINGLE_FILE]: {
        value: Datatypes.SINGLE_FILE,
        label: "File Upload",
        description: "Single file upload",
        icon: "fa fa-file",
    },

    [Datatypes.SINGLE_IMAGE]: {
        value: Datatypes.SINGLE_IMAGE,
        label: "Image Upload",
        description: "Single image upload",
        icon: "fa fa-image",
    },
};
