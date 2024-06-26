import { Command as $Command } from "https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts";
import { MetadataBearer as __MetadataBearer } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { PutBucketOwnershipControlsRequest } from "../models/models_0.d.ts";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client.d.ts";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutBucketOwnershipControlsCommand}.
 */
export interface PutBucketOwnershipControlsCommandInput extends PutBucketOwnershipControlsRequest {
}
/**
 * @public
 *
 * The output of {@link PutBucketOwnershipControlsCommand}.
 */
export interface PutBucketOwnershipControlsCommandOutput extends __MetadataBearer {
}
declare const PutBucketOwnershipControlsCommand_base: {
    new (input: PutBucketOwnershipControlsCommandInput): import("https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts").CommandImpl<PutBucketOwnershipControlsCommandInput, PutBucketOwnershipControlsCommandOutput, S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>;
    getEndpointParameterInstructions(): import("https://esm.sh/v135/@smithy/middleware-endpoint@2.4.1/dist-types/index.d.ts").EndpointParameterInstructions;
};
/**
 * @public
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Creates or modifies <code>OwnershipControls</code> for an Amazon S3 bucket. To use this
 *          operation, you must have the <code>s3:PutBucketOwnershipControls</code> permission. For
 *          more information about Amazon S3 permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/user-guide/using-with-s3-actions.html">Specifying permissions in a
 *             policy</a>. </p>
 *          <p>For information about Amazon S3 Object Ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/user-guide/about-object-ownership.html">Using object
 *             ownership</a>. </p>
 *          <p>The following operations are related to <code>PutBucketOwnershipControls</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteBucketOwnershipControls</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketOwnershipControlsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketOwnershipControlsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // PutBucketOwnershipControlsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   OwnershipControls: { // OwnershipControls
 *     Rules: [ // OwnershipControlsRules // required
 *       { // OwnershipControlsRule
 *         ObjectOwnership: "BucketOwnerPreferred" || "ObjectWriter" || "BucketOwnerEnforced", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new PutBucketOwnershipControlsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBucketOwnershipControlsCommandInput - {@link PutBucketOwnershipControlsCommandInput}
 * @returns {@link PutBucketOwnershipControlsCommandOutput}
 * @see {@link PutBucketOwnershipControlsCommandInput} for command's `input` shape.
 * @see {@link PutBucketOwnershipControlsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 */
export declare class PutBucketOwnershipControlsCommand extends PutBucketOwnershipControlsCommand_base {
}
