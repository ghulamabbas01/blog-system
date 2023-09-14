import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
// material
import { alpha, styled } from "@mui/material/styles";
import { Paper, Box, Typography, Stack } from "@mui/material";
//
import UploadIllustration from "src/components/illustration_upload-2";

// ----------------------------------------------------------------------

const DropZoneStyle = styled("div")(({ theme }) => ({
    outline: "none",
    display: "flex",
    overflow: "hidden",
    textAlign: "center",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(5, 0),
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create("padding"),
    backgroundColor: theme.palette.background.paper,
    border: `1px dashed ${theme.palette.grey[300]}`,
    "&:hover": {
        opacity: 0.72,
        cursor: "pointer",
    },
    [theme.breakpoints.up("md")]: { textAlign: "left", flexDirection: "row" },
}));

// ----------------------------------------------------------------------

UploadSingleFile.propTypes = {
    error: PropTypes.bool,
    file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    sx: PropTypes.object,
    state: PropTypes.object,
};

export default function UploadSingleFile({ ...props }) {
    const { error, file, sx, onDrop, loading, ...other } = props;
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
    } = useDropzone({
        multiple: false,
        onDrop,
        ...other,
    });

    const ShowRejectionItems = () => (
        <Paper
            variant="outlined"
            sx={{
                py: 1,
                px: 2,
                mt: 3,
                borderColor: "error.light",
                bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
            }}
        >
            {fileRejections.map(({ file, errors }: any) => {
                const { path, size } = file;
                return (
                    <Box key={path} sx={{ my: 1 }}>
                        <Typography variant="subtitle2" noWrap>
                            {path} - {size}
                        </Typography>
                        {errors.map((e: any) => (
                            <Typography key={e.code} variant="caption" component="p">
                                - {e.message}
                            </Typography>
                        ))}
                    </Box>
                );
            })}
        </Paper>
    );

    return (
        <Box sx={{ width: "100%", ...sx }}>
            <Typography variant="subtitle2" fontSize={14} fontWeight={600} mb={1}>
                Product Images
            </Typography>
            <DropZoneStyle
                {...getRootProps()}
                sx={{
                    ...(isDragActive && { opacity: 0.72 }),
                    ...((isDragReject || error) && {
                        color: "error.main",
                        borderColor: "error.light",
                        bgcolor: "error.lighter",
                    }),
                    ...(other.category && { padding: "8px 0" }),
                }}
            >
                {loading && (
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: loading ? `${loading}%` : 0,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.8),
                            zIndex: 9999,
                        }}
                    >
                        <Typography variant="h6" color="text.primary">
                            {loading}%
                        </Typography>
                    </Box>
                )}
                <input {...getInputProps()} />
                {/* {!other.category && <UploadIllustration sx={{ width: 220 }} />} */}
                <Box display="flex" alignItems="center" gap={5} sx={{ p: 2, ml: { md: 2 } }}>
                    <UploadIllustration sx={{ width: 200 }} />
                    <Stack>
                        <Typography variant="subtitle2" fontSize={20} fontWeight={700}>
                            Drop or Select Images
                        </Typography>
                        <Typography variant="subtitle1" fontSize={14} fontWeight={400}>
                            Drop Images here or click through your machine
                        </Typography>
                    </Stack>
                </Box>
                {file && (
                    <Box
                        component="img"
                        alt="file preview"
                        src={!file.preview ? file.url : file.preview}
                        sx={{
                            top: 8,
                            borderRadius: 1,
                            objectFit: "contain",
                            position: "absolute",
                            width: "calc(100% - 16px)",
                            height: "calc(100% - 16px)",
                            backgroundColor: "background.paper",
                        }}
                    />

                )}

            </DropZoneStyle>

            {fileRejections.length > 0 && <ShowRejectionItems />}
        </Box>
    );
}
