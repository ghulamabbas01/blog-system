import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { alpha, styled } from "@mui/material/styles";
import { Paper, Box, Typography } from "@mui/material";

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

function UploadSingleFile(props) {
  const { error, file, sx, onDrop, loading, ...other } = props;
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (file) {
      // If the file is already selected, generate a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  }, [file]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const selectedFile = acceptedFiles[0];
        setPreview(URL.createObjectURL(selectedFile));
      }
      onDrop(acceptedFiles);
    },
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
      }}>
      {fileRejections.map(({ file, errors }) => {
        const { path, size } = file;
        return (
          <Box key={path} sx={{ my: 1 }}>
            <Typography variant="subtitle2" noWrap>
              {path} - {size}
            </Typography>
            {errors.map((e) => (
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
        Image URL
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
        }}>
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
            }}>
            <Typography variant="h6" color="text.primary">
              {loading}%
            </Typography>
          </Box>
        )}
        <input {...getInputProps()} />
        <Box sx={{ p: 10, ml: { md: 2 } }}>
          <Typography variant="subtitle2" fontSize={16} fontWeight={600}>
            Drop or Select Images
          </Typography>
        </Box>
        {preview && (
          <Box
            component="img"
            alt="file preview"
            src={preview}
            sx={{
              top: 8,
              borderRadius: 1,
              objectFit: "cover",
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

UploadSingleFile.propTypes = {
  error: PropTypes.bool,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  sx: PropTypes.object,
  state: PropTypes.object,
  onDrop: PropTypes.func, // Add the onDrop prop
  loading: PropTypes.number, // Add the loading prop (percentage)
};

export default UploadSingleFile;

// import PropTypes from "prop-types";
// import { useDropzone } from "react-dropzone";
// // material
// import { alpha, styled } from "@mui/material/styles";
// import { Paper, Box, Typography } from "@mui/material";
// utils;
// import { fData } from "src/utils/formatNumber";

// import { UploadIllustration } from "src/assets";
// import { useTranslation } from "react-i18next";
// // ----------------------------------------------------------------------

// const DropZoneStyle = styled("div")(({ theme }) => ({
//   outline: "none",
//   display: "flex",
//   overflow: "hidden",
//   textAlign: "center",
//   position: "relative",
//   alignItems: "center",
//   flexDirection: "column",
//   justifyContent: "center",
//   padding: theme.spacing(5, 0),
//   borderRadius: theme.shape.borderRadius,
//   transition: theme.transitions.create("padding"),
//   backgroundColor: theme.palette.background.neutral,
//   border: `1px dashed ${theme.palette.grey[500_32]}`,
//   "&:hover": {
//     opacity: 0.72,
//     cursor: "pointer",
//   },
//   [theme.breakpoints.up("md")]: { textAlign: "left", flexDirection: "row" },
// }));
// // ----------------------------------------------------------------------
// UploadSingleFile.propTypes = {
//   error: PropTypes.bool,
//   file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   sx: PropTypes.object,
//   state: PropTypes.object,
// };
// export default function UploadSingleFile({
//   error,
//   file,
//   sx,
//   onDrop,
//   loading,
//   ...other
// }) {
//   // const { t } = useTranslation("common");
//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragReject,
//     fileRejections,
//   } = useDropzone({
//     multiple: false,
//     onDrop,
//     ...other,
//   });
//   const ShowRejectionItems = () => (
//     <Paper
//       variant="outlined"
//       sx={{
//         py: 1,
//         px: 2,
//         mt: 3,
//         borderColor: "error.light",
//         bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
//       }}>
//       {fileRejections.map(({ file, errors }) => {
//         const { path, size } = file;
//         return (
//           <Box key={path} sx={{ my: 1 }}>
//             <Typography variant="subtitle2" noWrap>
//               {path}
//             </Typography>
//             {errors.map((e) => (
//               <Typography key={e.code} variant="caption" component="p">
//                 - {e.message}
//               </Typography>
//             ))}
//           </Box>
//         );
//       })}
//     </Paper>
//   );
//   return (
//     <Box sx={{ width: "100%", ...sx }}>
//       <DropZoneStyle
//         {...getRootProps()}
//         sx={{
//           ...(isDragActive && { opacity: 0.72 }),
//           ...((isDragReject || error) && {
//             color: "error.main",
//             borderColor: "error.light",
//             bgcolor: "error.lighter",
//           }),
//           ...(other.category && { padding: "8px 0" }),
//         }}>
//         {loading && (
//           <Box
//             sx={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: loading ? `${loading}%` : 0,
//               height: "100%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               bgcolor: (theme) => alpha(theme.palette.primary.main, 0.8),
//               zIndex: 9999,
//             }}>
//             <Typography variant="h6" color="text.primary">
//               {loading}%
//             </Typography>
//           </Box>
//         )}
//         <input {...getInputProps()} />
//         {!other.category && (
//           <Typography variant="subtitle2" color="initial">
//             helo
//           </Typography>
//         )}
//         <Box sx={{ p: 2, ml: { md: 2 } }}>
//           <Typography variant={other.category ? "subtitle1" : "h5"}>
//             "drop-or-select-images"
//           </Typography>
//           {other.category ? (
//             <Typography variant="subtitle2" color="initial">
//               {" "}
//               hello
//             </Typography>
//           ) : (
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               {"drop-image-here-or-click"}&nbsp;
//               <Typography
//                 variant="body2"
//                 component="span"
//                 sx={{ color: "primary.main", textDecoration: "underline" }}>
//                 {"browse"}
//               </Typography>
//               &nbsp;{"thorough-your-machine"}
//             </Typography>
//           )}
//         </Box>
//         {file && (
//           <Box
//             component="img"
//             alt="file preview"
//             src={!file.preview ? file.url : file.preview}
//             sx={{
//               top: 8,
//               borderRadius: 1,
//               objectFit: "contain",
//               position: "absolute",
//               width: "calc(100% - 16px)",
//               height: "calc(100% - 16px)",
//               backgroundColor: "background.paper",
//             }}
//           />
//         )}
//       </DropZoneStyle>
//       {fileRejections.length > 0 && <ShowRejectionItems />}
//     </Box>
//   );
// }
